import { WebpackLazyModule } from "@aptero/axolotis-player/build/types/modules/core/loader/WebpackLoader";
import { LazyServices, Service } from "@aptero/axolotis-player/build/types/modules/core/service/LazyServices";
import { FrameLoop } from "@aptero/axolotis-player/build/types/modules/FrameLoop";
import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
export declare class Factory implements WebpackLazyModule, Service<DebugBtn> {
    createService(services: LazyServices): Promise<DebugBtn>;
}
export declare class DebugBtn implements Component {
    constructor(frameLoop: FrameLoop, serviceEntity: LazyServices);
    getType(): string;
}
