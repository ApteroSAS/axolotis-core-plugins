import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
import { WorldEntity } from "@aptero/axolotis-player/build/types/modules/core/ecs/WorldEntity";
import { WebpackLazyModule } from "@aptero/axolotis-player/build/types/modules/core/loader/WebpackLoader";
import { LazyServices, Service } from "@aptero/axolotis-player/build/types/modules/core/service/LazyServices";
import { WorldService } from "@aptero/axolotis-player/build/types/modules/core/WorldService";
import { FrameLoop } from "@aptero/axolotis-player/build/types/modules/FrameLoop";
import { ThreeLib } from "../three/ThreeLib";
export declare class Factory implements WebpackLazyModule, Service<PortalsService> {
    constructor();
    createService(services: LazyServices): Promise<PortalsService>;
}
export declare class PortalsService implements Component {
    private services;
    private three;
    constructor(services: WorldService, frameLoop: FrameLoop, three: ThreeLib, roomUrl: string);
    i: number;
    render(): void;
    getType(): string;
    cleanUpRoomUrl(roomUrl: string): string;
    notifylWorld(url: string, world: WorldEntity): void;
    getWorld(url: string): any;
    worldExist(url: string): boolean;
    portalsLoops: ((delta: any) => void)[];
    portalsRenderLoops: (() => void)[];
    addPortalLoop(callback: (delta: any) => void): void;
    addPortalRenderLoop(callback: () => void): void;
}
