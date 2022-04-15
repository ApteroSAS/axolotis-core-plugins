import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
import { ComponentFactory } from "@aptero/axolotis-player/build/types/modules/core/ecs/ComponentFactory";
import { WorldEntity } from "@aptero/axolotis-player/build/types/modules/core/ecs/WorldEntity";
import { ThreeLib } from "@root/lib/modules/three/ThreeLib";
import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
export declare class Factory implements WebpackLazyModule, ComponentFactory<Sky> {
    createComponent(world: WorldEntity, config: any): Promise<Sky>;
}
export default class Sky implements Component {
    private scene;
    private texture;
    constructor();
    getType(): string;
    initialize(three: ThreeLib, skymap: string): Promise<void>;
}
