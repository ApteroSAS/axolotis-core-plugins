import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { Component } from "@aptero/axolotis-player";
import { LazyServices } from "@aptero/axolotis-player";
import { ThreeLib } from "@root/lib/modules/three/ThreeLib";
import { Service } from "@aptero/axolotis-player";
import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
import { FrameLoop } from "@root/lib/modules/frame/FrameLoop";

export class Factory implements WebpackLazyModule, Service<OrbitController> {
  async createService(services: LazyServices): Promise<OrbitController> {
    let frameLoop = await services.getService<FrameLoop>(
      "@aptero/axolotis-core-plugins/frame/FrameLoop"
    );
    let three = await services.getService<ThreeLib>(
      "@aptero/axolotis-core-plugins/three/ThreeLib"
    );
    let module = new OrbitController(three, frameLoop);
    return module;
  }
}

export class OrbitController implements Component {
  constructor(three: ThreeLib, frameLoop: FrameLoop) {
    const controls = new OrbitControls(three.camera, three.renderer.domElement);
    frameLoop.addLoop(OrbitController.name, () => {
      controls.update();
    });
  }

  getType(): string {
    return OrbitController.name;
  }
}
