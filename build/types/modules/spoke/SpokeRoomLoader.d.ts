import { Component } from "@aptero/axolotis-player";
import { ComponentFactory } from "@aptero/axolotis-player";
import { WorldEntity } from "@aptero/axolotis-player";
import SceneLoader from "@root/lib/modules/spoke/SceneLoader";
import { ThreeLib } from "@root/lib/modules/three/ThreeLib";
import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
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
