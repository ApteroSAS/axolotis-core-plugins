import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
import { WorldEntity } from "@aptero/axolotis-player/build/types/modules/core/ecs/WorldEntity";
import { CodeLoaderComponent } from "@aptero/axolotis-player/build/types/modules/core/loader/CodeLoaderComponent";
import { WebpackLazyModule } from "@aptero/axolotis-player/build/types/modules/core/loader/WebpackLoader";
import {
  LazyServices,
  Service,
} from "@aptero/axolotis-player/build/types/modules/core/service/LazyServices";
import { ServiceEntity } from "@aptero/axolotis-player";
import { WorldService } from "@aptero/axolotis-player/build/types/modules/core/WorldService";
import { FrameLoop } from "@aptero/axolotis-player/build/types/modules/FrameLoop";
import { ThreeLib } from "../three/ThreeLib";

export class Factory implements WebpackLazyModule, Service<PortalsService> {
  constructor() {}

  async createService(services: LazyServices): Promise<PortalsService> {
    const worldService = await services.getService<WorldService>(
      "@aptero/axolotis-player/modules/core/WorldService"
    );
    const actualWorldService = await worldService
      .getActiveWorld()
      .getFirstComponentByType<ServiceEntity>(ServiceEntity.name);
    const codeLoader = await actualWorldService.getService<CodeLoaderComponent>(
      "@aptero/axolotis-player/modules/core/loader/CodeLoaderService"
    );
    const frameLoop = await services.getService<FrameLoop>(
      "@aptero/axolotis-player/modules/FrameLoop"
    );
    const three = await services.getService<ThreeLib>(
      "@aptero/axolotis-core-plugins/modules/three/ThreeLib"
    );
    let initialRoomUrl = "initial";
    try {
      initialRoomUrl = window.location.href;
    } catch (e) {
      /* ignore*/
    }
    return new PortalsService(worldService, frameLoop, three, initialRoomUrl);
  }
}

const worlds = {};

export class PortalsService implements Component {
  constructor(
    private services: WorldService,
    frameLoop: FrameLoop,
    private three: ThreeLib,
    roomUrl: string
  ) {
    this.notifylWorld(roomUrl, services.getActiveWorld());
    frameLoop.addLoop(PortalsService.name, (delta) => {
      for (const loop of this.portalsLoops) {
        loop(delta);
      }
    });
    this.three.preRenderPass.push(() => {
      this.render();
    });
  }

  i = 0;

  render() {
    const gl = this.three.renderer.getContext();
    // clear buffers now: color, depth, stencil
    this.three.renderer.clear(true, true, true);
    // do not clear buffers before each render pass
    this.three.renderer.autoClear = false;

    for (const loop of this.portalsRenderLoops) {
      loop();
    }

    gl.colorMask(true, true, true, true);
    gl.depthMask(true);
  }

  getType(): string {
    return PortalsService.name;
  }

  cleanUpRoomUrl(roomUrl: string) {
    roomUrl.replace("./", "");
    if (!roomUrl.startsWith("http")) {
      roomUrl = window.location.origin + "/" + roomUrl;
    }
    return new URL(roomUrl).toString();
  }

  notifylWorld(url: string, world: WorldEntity) {
    url = this.cleanUpRoomUrl(url);
    if (!worlds[url]) {
      worlds[url] = world;
    }
  }

  getWorld(url: string) {
    url = this.cleanUpRoomUrl(url);
    return worlds[url];
  }

  worldExist(url: string) {
    return !!this.getWorld(url);
  }

  portalsLoops: ((delta) => void)[] = [];
  portalsRenderLoops: (() => void)[] = [];

  addPortalLoop(callback: (delta) => void) {
    this.portalsLoops.push(callback);
  }

  addPortalRenderLoop(callback: () => void) {
    this.portalsRenderLoops.push(callback);
  }
}
