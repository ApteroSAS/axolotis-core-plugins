import { LazyServices } from "@aptero/axolotis-player";
import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
import { Service } from "@aptero/axolotis-player/build/types/modules/core/ecs/Service";
import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
export declare class Factory implements WebpackLazyModule, Service<FrameLoop> {
    createService(services: LazyServices): Promise<FrameLoop>;
}
export declare class FrameLoop implements Component {
    loops: {
        [id: string]: (delta: number) => void;
    };
    private prevTime;
    private monitoringStart;
    private monitoringEnd;
    constructor();
    startAnimationFrameLoop(): void;
    setMonitoringCallback(start: (name: any) => void, end: (name: any) => void): void;
    removeLoop(loopName: string): void;
    addLoop(loopName: string, iterationCallback: (delta: number) => void): void;
    getType(): string;
}
