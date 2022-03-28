import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
import { WebpackLazyModule } from "@aptero/axolotis-player/build/types/modules/core/loader/WebpackLoader";
import { ComponentFactory } from "@aptero/axolotis-player/build/types/modules/core/ecs/ComponentFactory";
import { WorldEntity } from "@aptero/axolotis-player/build/types/modules/core/ecs/WorldEntity";
import SceneLoader from "@root/lib/modules/spoke/SceneLoader";
import { ThreeLib } from "@root/lib/modules/three/ThreeLib";
export declare class SpokeRoomLoader implements Component {
    private threeLib;
    sceneLoader: SceneLoader | null;
    constructor(threeLib: ThreeLib);
    loadRoom(hubid: any): Promise<void>;
    getType(): string;
}
export declare class Factory implements WebpackLazyModule, ComponentFactory<SpokeRoomLoader> {
    createComponent(world: WorldEntity, config: any): Promise<SpokeRoomLoader>;
}
