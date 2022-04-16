import { Component } from "@aptero/axolotis-player";
import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { FrameLoop } from "@root/lib/modules/frame/FrameLoop";
import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
import { Service } from "@aptero/axolotis-player";
import { LazyServices } from "@aptero/axolotis-player";
export declare function asyncLoadThree(): Promise<any>;
export declare function getGlobalRenderer(): Promise<any>;
export declare class ThreeLib implements Component {
    private frameLoop;
    private THREE;
    renderer: WebGLRenderer;
    scene: Scene;
    camera: PerspectiveCamera;
    preRenderPass: (() => void)[];
    render: () => void;
    onWindowResize: () => void;
    constructor(frameLoop: FrameLoop, THREE: any);
    init(): Promise<void>;
    loadAssets(path: string): Promise<any>;
    getType(): string;
}
export declare class Factory implements WebpackLazyModule, Service<ThreeLib> {
    constructor();
    createService(services: LazyServices): Promise<ThreeLib>;
}
