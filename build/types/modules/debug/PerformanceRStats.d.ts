import { Service } from "@aptero/axolotis-player";
import { Component } from "@aptero/axolotis-player";
import { ThreeLib } from "@root/lib/modules/three/ThreeLib";
import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
import { LazyServices } from "@aptero/axolotis-player";
import { WorldService } from "@root/lib/modules/worlds/WorldService";
import { FrameLoop } from "@root/lib/modules/frame/FrameLoop";
export declare class Factory implements WebpackLazyModule, Service<PerformanceRStats> {
    createService(services: LazyServices): Promise<PerformanceRStats>;
}
export declare class PerformanceRStats implements Component {
    private threeLib;
    private worldService;
    private rS;
    constructor(threeLib: ThreeLib, frameLoop: FrameLoop, worldService: WorldService);
    updateRstats(): void;
    updateWorldCallback(): void;
    getType(): string;
}
