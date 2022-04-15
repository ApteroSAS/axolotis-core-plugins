import { Service } from "@aptero/axolotis-player/build/types/modules/core/ecs/Service";
import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
import { LazyServices } from "@aptero/axolotis-player";
export declare class Factory implements WebpackLazyModule, Service<PerformanceStats> {
    createService(services: LazyServices): Promise<PerformanceStats>;
}
export declare class PerformanceStats implements Component {
    constructor();
    getType(): string;
}
