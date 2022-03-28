import Component from "@root/modules/core/ecs/Component";
import SceneLoader from "@root/modules/spoke/SceneLoader";
import { ThreeLib } from "@root/modules/three/ThreeLib";
import { WebpackLazyModule } from "@root/modules/core/loader/WebpackLoader";
import { ComponentFactory } from "@root/modules/core/ecs/ComponentFactory";
import { WorldEntity } from "@root/modules/core/ecs/WorldEntity";
export declare class SpokeRoomLoader implements Component {
    private threeLib;
    sceneLoader: SceneLoader | null;
    constructor(threeLib: ThreeLib);
    loadRoom(hubid: any): Promise<void>;
    getType(): string;
}
export declare class Factory implements WebpackLazyModule, ComponentFactory<SpokeRoomLoader> {
    create(world: WorldEntity, config: any): Promise<SpokeRoomLoader>;
}
