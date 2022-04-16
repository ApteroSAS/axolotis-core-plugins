import { Component } from "@aptero/axolotis-player";
import { ComponentFactory } from "@aptero/axolotis-player";
import { WorldEntity } from "@aptero/axolotis-player";
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
