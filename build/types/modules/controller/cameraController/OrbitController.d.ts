import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
import { LazyServices } from "@aptero/axolotis-player/build/types";
import { ThreeLib } from "@root/lib/modules/three/ThreeLib";
import { Service } from "@aptero/axolotis-player/build/types/modules/core/ecs/Service";
import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
import { FrameLoop } from "@root/lib/modules/frame/FrameLoop";
export declare class Factory implements WebpackLazyModule, Service<OrbitController> {
    createService(services: LazyServices): Promise<OrbitController>;
}
export declare class OrbitController implements Component {
    constructor(three: ThreeLib, frameLoop: FrameLoop);
    getType(): string;
}
