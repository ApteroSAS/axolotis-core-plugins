import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
import { Service } from "@aptero/axolotis-player/build/types/modules/core/ecs/Service";
import { LazyServices, WorldEntity } from "@aptero/axolotis-player";
import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
export declare class Factory implements WebpackLazyModule, Service<WorldService> {
    constructor();
    createService(services: LazyServices): Promise<WorldService>;
}
export declare function registerNewWorld(worldEntity: WorldEntity): void;
export declare class WorldService implements Component {
    private world;
    constructor(services: LazyServices);
    getType(): string;
    getWorlds(): WorldEntity[];
    getActiveWorld(): WorldEntity;
    isActiveWorld(): boolean;
    addOnWorldChangeCallback(callback: () => void, init?: boolean): void;
    addOnWorldAdded(callback: () => void, init?: boolean): void;
    setActiveWorld(world: WorldEntity): void;
    setActiveWorldByNumber(number: number): void;
}
