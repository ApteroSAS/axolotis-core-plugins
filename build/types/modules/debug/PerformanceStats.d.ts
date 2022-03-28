import { WebpackLazyModule } from "@aptero/axolotis-player/build/types/modules/core/loader/WebpackLoader";
import { LazyServices, Service } from "@aptero/axolotis-player/build/types/modules/core/service/LazyServices";
import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
import { FrameLoop } from "@aptero/axolotis-player";
import { WorldService } from "@aptero/axolotis-player/build/types/modules/core/WorldService";
import { ThreeLib } from "@root/lib/modules/three/ThreeLib";
export declare class Factory implements WebpackLazyModule, Service<PerformanceStats> {
    createService(services: LazyServices): Promise<PerformanceStats>;
}
export declare class PerformanceStats implements Component {
    private threeLib;
    private worldService;
    private rS;
    constructor(threeLib: ThreeLib, frameLoop: FrameLoop, worldService: WorldService);
    updateRstats(): void;
    updateWorldCallback(): void;
    getType(): string;
}
