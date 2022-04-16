import { assetsLoader } from "@root/lib/modules/three/ThreeAssetsLoader";
import { Component } from "@aptero/axolotis-player";
import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { FrameLoop } from "@root/lib/modules/frame/FrameLoop";
//import { WorldService } from "@root/lib/modules/worlds/WorldService";
import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
import { Service } from "@aptero/axolotis-player";
import { LazyServices } from "@aptero/axolotis-player";

declare let window: any;

export async function asyncLoadThree() {
  //this async import has the only usage of renamin any import to three (using webpack chunk)
  const THREE: any = await import(
    /*  webpackPrefetch: 0,  webpackMode: 'lazy',  webpackChunkName: "@aptero/axolotis-core-plugins/three"  */
    "three"
  );
  return THREE;
}

export async function getGlobalRenderer() {
  if (!window.axolotis?.renderer) {
    const THREE = await asyncLoadThree();
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
  renderer: WebGLRenderer;
  scene: Scene;
  camera: PerspectiveCamera;
  preRenderPass: (() => void)[] = [];
  render: () => void;
  onWindowResize: () => void;

  constructor(
    private frameLoop: FrameLoop,
    //private worldService: WorldService,
    private THREE
  ) {}

  async init() {
    this.scene = new this.THREE.Scene();

    this.renderer = await getGlobalRenderer();

    this.camera = new this.THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.001,
      100000
    );
    this.camera.position.z = 2;

    this.render = () => {
      for (const prerender of this.preRenderPass) {
        prerender();
      }
      // FINAL PASS
      this.renderer.render(this.scene, this.camera);
      // set things back to normal
      this.renderer.autoClear = true;
    };

    this.onWindowResize = () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.render();
    };

    /*
    this.worldService.addOnWorldChangeCallback(() => {
      window.removeEventListener("resize", onWindowResize);
      this.frameLoop.removeLoop(ThreeLib.name);
      if (this.worldService.isActiveWorld()) {
        window.addEventListener("resize", onWindowResize, false);
        this.frameLoop.addLoop(ThreeLib.name, render);
      }
    }, true);
    */
    //setup three loop
    window.addEventListener("resize", this.onWindowResize, false);
    this.frameLoop.addLoop(ThreeLib.name, this.render);
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
        const module: any = await import(
          /*  webpackPrefetch: 0,  webpackMode: 'lazy',  webpackChunkName: "@aptero/axolotis-core-plugins/three/examples/jsm/loaders/GLTFLoader"  */
          "three/examples/jsm/loaders/GLTFLoader"
        );
        const gltfLoader = new module.GLTFLoader();
        //const gltfLoader = new GLTFLoader(new this.THREE.LoadingManager());
        return gltfLoader;
      });
      const result = await loader.loadAsync(path);
      assetsLoader.assets[path] = result;
    }
    if (path.endsWith(".jpg")) {
      const loader = await assetsLoader.getLoader("TextureLoader", async () => {
        const texLoader = new this.THREE.TextureLoader();
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
      "@aptero/axolotis-core-plugins/frame/FrameLoop"
    );
    /*let worldService = await services.getService<WorldService>(
      "@aptero/axolotis-core-plugins/worlds/WorldService"
    );*/
    const threeLib = new ThreeLib(
      frameLoop,
      //worldService,
      await asyncLoadThree()
    );
    await threeLib.init();
    return threeLib;
  }
}
