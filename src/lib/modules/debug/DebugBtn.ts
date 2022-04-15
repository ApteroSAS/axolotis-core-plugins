import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
import { PerformanceStats } from "@root/lib/modules/debug/PerformanceStats";
import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
import { LazyServices, WorldEntity } from "@aptero/axolotis-player";
import { FrameLoop } from "@root/lib/modules/frame/FrameLoop";
import { ComponentFactory } from "@aptero/axolotis-player/build/types/modules/core/ecs/ComponentFactory";
import { Services } from "@aptero/axolotis-player";

export class Factory implements WebpackLazyModule, ComponentFactory<DebugBtn> {
  async createComponent(world: WorldEntity, params: any): Promise<DebugBtn> {
    let services = world.getFirstComponentByType<Services>(Services.name);
    let frameLoop = await services.getService<FrameLoop>(
      "@aptero/axolotis-core-plugins/frame/FrameLoop"
    );
    return new DebugBtn(frameLoop, services);
  }
}

export class DebugBtn implements Component {
  constructor(frameLoop: FrameLoop, services: LazyServices) {
    let html =
      '<div id="debug-btn" style="display: block;\n' +
      "    font-family: monospace;\n" +
      "    cursor: pointer;\n" +
      "    position: absolute;\n" +
      "    bottom: 0;\n" +
      "    right: 2px;\n" +
      "    padding: 4px 8px;\n" +
      "    color: #fff;\n" +
      "    text-shadow: 1px 1px 1px rgba(0,0,0,.5);\n" +
      "    font-size: 10px;\n" +
      "    -moz-user-select: none;\n" +
      "    -webkit-user-select: none;\n" +
      "    -ms-user-select: none;\n" +
      '    user-select: none" >60 FPS</div>';
    window.document.body.insertAdjacentHTML("beforeend", html);
    let elementById = window.document.getElementById("debug-btn");
    if (elementById) {
      elementById.onclick = (evt) => {
        evt.stopPropagation();
        evt.preventDefault();
        services.getService<PerformanceStats>(
          "@aptero/axolotis-core-plugins/debug/PerformanceStats"
        );
      };
      frameLoop.addLoop(DebugBtn.name, (delta) => {
        (elementById as any).innerText =
          Math.round((1.0 / delta) * 1000) + " FPS";
      });
      if (window.location.host.startsWith("localhost")) {
        services.getService<PerformanceStats>(
          "@aptero/axolotis-core-plugins/debug/PerformanceStats"
        );
      }
    }
  }

  getType(): string {
    return DebugBtn.name;
  }
}
