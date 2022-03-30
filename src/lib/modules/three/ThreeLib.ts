import * as THREE from "three";

import { assetsLoader } from "@root/lib/modules/three/ThreeAssetsLoader";
import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
import { WebpackLazyModule } from "@aptero/axolotis-player/build/types/modules/core/loader/WebpackLoader";
import {
  FrameLoop,
  LazyServices,
  WorldService,
} from "@aptero/axolotis-player/build/types";
import { Service } from "@aptero/axolotis-player/build/types/modules/core/service/LazyServices";

declare let window: any;
export function getGlobalRenderer() {
  if (!window.axolotis?.renderer) {
    let renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setPixelRatio(window.devicePixelRatio);

    document.body.appendChild(renderer.domElement);
    if (!window.axolotis) {
      window.axolotis = {};
    }
    window.axolotis.renderer = renderer;
  }
  return window.axolotis.renderer;
}

export class ThreeLib implements Component {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  preRenderPass: (() => void)[] = [];
  constructor(frameLoop: FrameLoop, worldService: WorldService) {
    this.scene = new THREE.Scene();

    this.renderer = getGlobalRenderer();

    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.001,
      100000
    );
    this.camera.position.z = 2;

    const render = () => {
      for (const prerender of this.preRenderPass) {
        prerender();
      }
      // FINAL PASS
      this.renderer.render(this.scene, this.camera);
      // set things back to normal
      this.renderer.autoClear = true;
    };

    const onWindowResize = () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      render();
    };

    worldService.addOnWorldChangeCallback(() => {
      window.removeEventListener("resize", onWindowResize);
      frameLoop.removeLoop(ThreeLib.name);
      if (worldService.isActiveWorld()) {
        window.addEventListener("resize", onWindowResize, false);
        frameLoop.addLoop(ThreeLib.name, render);
      }
    }, true);
  }

  async loadAssets(path: string) {
    if (assetsLoader.assets[path]) {
      return assetsLoader.assets[path];
    }
    /*
    TODO createa a early start download of assets so that the GLB start downloading early in the waterfall
    Not as simple as it seems may be doable using service worker
    fetch(path);//start download of assets
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", ()=>{});
    oReq.open("GET", path);
    oReq.send();
    */
    if (path.endsWith(".glb")) {
      const loader = await assetsLoader.getLoader("GLTFLoader", async () => {
        const GLTFLoader: any = await import(
          "three/examples/jsm/loaders/GLTFLoader"
        );
        const gltfLoader = new GLTFLoader.GLTFLoader();
        return gltfLoader;
      });
      const result = await loader.loadAsync(path);
      assetsLoader.assets[path] = result;
    }
    if (path.endsWith(".jpg")) {
      const loader = await assetsLoader.getLoader("TextureLoader", async () => {
        const THREE: any = await import("three");
        const texLoader = new THREE.TextureLoader();
        return texLoader;
      });
      const result = await loader.loadAsync(path);
      assetsLoader.assets[path] = result;
    }
    return assetsLoader.assets[path];
  }

  getType(): string {
    return ThreeLib.name;
  }
}

export class Factory implements WebpackLazyModule, Service<ThreeLib> {
  constructor() {}

  async createService(services: LazyServices): Promise<ThreeLib> {
    let frameLoop = await services.getService<FrameLoop>(
      "@aptero/axolotis-player/modules/FrameLoop"
    );
    let worldService = await services.getService<WorldService>(
      "@aptero/axolotis-player/modules/core/WorldService"
    );
    return new ThreeLib(frameLoop, worldService);
  }
}
