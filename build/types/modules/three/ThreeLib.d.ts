import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
import { WebpackLazyModule } from "@aptero/axolotis-player/build/types/modules/core/loader/WebpackLoader";
import { FrameLoop, LazyServices, WorldService } from "@aptero/axolotis-player/build/types";
import { Service } from "@aptero/axolotis-player/build/types/modules/core/service/LazyServices";
import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
export declare function asyncLoadThree(): Promise<any>;
export declare function getGlobalRenderer(): Promise<any>;
export declare class ThreeLib implements Component {
    private frameLoop;
    private worldService;
    private THREE;
    renderer: WebGLRenderer;
    scene: Scene;
    camera: PerspectiveCamera;
    preRenderPass: (() => void)[];
    constructor(frameLoop: FrameLoop, worldService: WorldService, THREE: any);
    init(): Promise<void>;
    loadAssets(path: string): Promise<any>;
    getType(): string;
}
export declare class Factory implements WebpackLazyModule, Service<ThreeLib> {
    constructor();
    createService(services: LazyServices): Promise<ThreeLib>;
}
