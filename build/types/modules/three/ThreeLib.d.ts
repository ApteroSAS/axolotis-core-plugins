import * as THREE from "three";
import Component from "@aptero/axolotis-player";
import { FrameLoop } from "@aptero/axolotis-player";
import { WebpackLazyModule } from "@aptero/axolotis-player";
import { LazyServices, Service } from "@aptero/axolotis-player";
import { WorldService } from "@aptero/axolotis-player";
export declare function getGlobalRenderer(): any;
export declare class ThreeLib implements Component {
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    preRenderPass: (() => void)[];
    constructor(frameLoop: FrameLoop, worldService: WorldService);
    getType(): string;
}
export declare class Factory implements WebpackLazyModule, Service<ThreeLib> {
    constructor();
    create(services: LazyServices): Promise<ThreeLib>;
}
