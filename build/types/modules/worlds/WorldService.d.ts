import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
import { Service, LazyServices, WorldEntity, Component } from "@aptero/axolotis-player";
import { FrameLoop } from "@root/lib/modules/frame/FrameLoop";
import { ThreeLib } from "@root/lib/modules/three/ThreeLib";
export declare class Factory implements WebpackLazyModule, Service<WorldService> {
    constructor();
    createService(services: LazyServices): Promise<WorldService>;
}
export declare class Name implements Component {
    name: string;
    constructor(name: string);
    getType(): string;
}
export declare function registerNewWorld(worldEntity: WorldEntity): void;
export declare class WorldService implements Component {
    private world;
    constructor(services: LazyServices, frameLoop: FrameLoop, threeLib: ThreeLib);
    getType(): string;
    getWorlds(): {
        [id: string]: WorldEntity;
    };
    getActiveWorld(): WorldEntity;
    isActiveWorld(): boolean;
    addOnWorldChangeCallback(callback: () => void, init?: boolean): void;
    addOnWorldAdded(callback: () => void, init?: boolean): void;
    setActiveWorld(world: WorldEntity): void;
    setActiveWorldByName(name: string): void;
}
