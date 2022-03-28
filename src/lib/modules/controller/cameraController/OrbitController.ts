import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import Component from '@aptero/axolotis-player/build/types/modules/core/ecs/Component'
import { WebpackLazyModule } from "@aptero/axolotis-player/build/types/modules/core/loader/WebpackLoader";
import {FrameLoop, LazyServices} from "@aptero/axolotis-player/build/types";
import {Service} from "@aptero/axolotis-player/build/types/modules/core/service/LazyServices";
import {ThreeLib} from "@root/lib/modules/three/ThreeLib";

export class Factory implements WebpackLazyModule, Service<OrbitController>{
    async createService(services: LazyServices): Promise<OrbitController> {
        let frameLoop = await services.getService<FrameLoop>("@root/lib/modules/FrameLoop");
        let three = await services.getService<ThreeLib>("@root/lib/modules/three/ThreeLib");
        let module = new OrbitController(three,frameLoop);
        return module;
    }

}

export class OrbitController implements Component{
    constructor(three:ThreeLib,frameLoop:FrameLoop) {
        const controls = new OrbitControls( three.camera,  three.renderer.domElement);
        frameLoop.addLoop(OrbitController.name,()=>{
            controls.update();
        })

    }

    getType(): string {
        return OrbitController.name;
    }
}
