import { Component } from "@aptero/axolotis-player";
import { WorldEntity } from "@aptero/axolotis-player";
import { ThreeLib } from "../three/ThreeLib";
import { Service } from "@aptero/axolotis-player";
import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
import { LazyServices } from "@aptero/axolotis-player";
import { WorldService } from "@root/lib/modules/worlds/WorldService";
import { FrameLoop } from "@root/lib/modules/frame/FrameLoop";
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
