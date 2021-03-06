import { Component } from "@aptero/axolotis-player";
import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
import { LazyServices, WorldEntity } from "@aptero/axolotis-player";
import { FrameLoop } from "@root/lib/modules/frame/FrameLoop";
import { ComponentFactory } from "@aptero/axolotis-player";
export declare class Factory implements WebpackLazyModule, ComponentFactory<DebugBtn> {
    createComponent(world: WorldEntity, params: any): Promise<DebugBtn>;
}
export declare class DebugBtn implements Component {
    constructor(frameLoop: FrameLoop, services: LazyServices);
    getType(): string;
}
