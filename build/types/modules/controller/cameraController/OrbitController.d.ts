import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
import { WebpackLazyModule } from "@aptero/axolotis-player/build/types/modules/core/loader/WebpackLoader";
import { FrameLoop, LazyServices } from "@aptero/axolotis-player/build/types";
import { Service } from "@aptero/axolotis-player/build/types/modules/core/service/LazyServices";
import { ThreeLib } from "@root/lib/modules/three/ThreeLib";
export declare class Factory implements WebpackLazyModule, Service<OrbitController> {
    createService(services: LazyServices): Promise<OrbitController>;
}
export declare class OrbitController implements Component {
    constructor(three: ThreeLib, frameLoop: FrameLoop);
    getType(): string;
}
