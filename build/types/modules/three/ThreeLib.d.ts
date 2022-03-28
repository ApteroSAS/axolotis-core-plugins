import * as THREE from "three";
import Component from '@aptero/axolotis-player/build/types/modules/core/ecs/Component';
import { WebpackLazyModule } from "@aptero/axolotis-player/build/types/modules/core/loader/WebpackLoader";
import { FrameLoop, LazyServices, WorldService } from "@aptero/axolotis-player/build/types";
import { Service } from "@aptero/axolotis-player/build/types/modules/core/service/LazyServices";
export declare function getGlobalRenderer(): any;
export declare class ThreeLib implements Component {
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    preRenderPass: (() => void)[];
    constructor(frameLoop: FrameLoop, worldService: WorldService);
    loadAssets(path: string): Promise<any>;
    getType(): string;
}
export declare class Factory implements WebpackLazyModule, Service<ThreeLib> {
    constructor();
    createService(services: LazyServices): Promise<ThreeLib>;
}
