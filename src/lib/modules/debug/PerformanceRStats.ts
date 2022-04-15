import { Service } from "@aptero/axolotis-player/build/types/modules/core/ecs/Service";

const html =
  "<style>\n" +
  "    .alarm{\n" +
  "        color: #b70000;!important;\n" +
  "    }\n" +
  "\n" +
  "    .rs-base h1{\n" +
  "        margin: 0;\n" +
  "        padding: 0;\n" +
  "        font-size: 1.4em;\n" +
  "        color: #fff;\n" +
  "        margin-bottom: 5px;\n" +
  "        cursor: pointer;\n" +
  "    }\n" +
  "\n" +
  "    .rs-base div.rs-group{\n" +
  "        margin-bottom: 10px;\n" +
  "    }\n" +
  "\n" +
  "    .rs-base div.rs-group.hidden{\n" +
  "        display: none;\n" +
  "    }\n" +
  "\n" +
  "    .rs-base div.rs-fraction{\n" +
  "        position: relative;\n" +
  "        margin-bottom: 5px;\n" +
  "    }\n" +
  "\n" +
  "    .rs-base div.rs-fraction p{\n" +
  "        width: 120px;\n" +
  "        text-align: right;\n" +
  "        margin: 0;\n" +
  "        padding: 0;\n" +
  "    }\n" +
  "\n" +
  "    .rs-base div.rs-legend{\n" +
  "        position: absolute;\n" +
  "        line-height: 1em;\n" +
  "    }\n" +
  "\n" +
  "    .rs-base div.rs-counter-base{\n" +
  "        position: relative;\n" +
  "        margin: 2px 0;\n" +
  "        height: 1em;\n" +
  "    }\n" +
  "\n" +
  "    .rs-base span.rs-counter-id{\n" +
  "        color: white;\n" +
  "        position: absolute;\n" +
  "        left: 0;\n" +
  "        top: 0;\n" +
  "    }\n" +
  "\n" +
  "    .rs-base div.rs-counter-value{\n" +
  "        color: white;\n" +
  "        position: absolute;\n" +
  "        left: 90px;\n" +
  "        width: 30px;\n" +
  "        height: 1em;\n" +
  "        top: 0;\n" +
  "        text-align: right;\n" +
  "    }\n" +
  "\n" +
  "    .rs-base canvas.rs-canvas{\n" +
  "        position: absolute;\n" +
  "        right: 0;\n" +
  "    }\n" +
  "</style>\n" +
  "<style>\n" +
  "\n" +
  "    .rs-header {\n" +
  "        display: flex;\n" +
  "        justify-content: space-between;\n" +
  "        border-bottom: 1px rgba(255,255,255,0.1) solid;\n" +
  "        margin-bottom: 8px;\n" +
  "    }\n" +
  "\n" +
  "    .rs-collapse-btn {\n" +
  "        cursor: pointer;\n" +
  "        font-size: 12px;\n" +
  "    }\n" +
  "\n" +
  "    .rs-fps-counter {\n" +
  "        font-family: monospace;\n" +
  "        cursor: pointer;\n" +
  "        position: absolute;\n" +
  "        bottom: 96px;\n" +
  "        right: 2px;\n" +
  "        padding: 4px 8px;\n" +
  "        color: #ffffff;\n" +
  "        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n" +
  "        font-size: 10px;\n" +
  "        -moz-user-select: none;\n" +
  "        -webkit-user-select: none;\n" +
  "        -ms-user-select: none;\n" +
  "        user-select: none;\n" +
  "    }\n" +
  "\n" +
  "    .rs-base {\n" +
  "        right: 10px;\n" +
  "        left: auto;\n" +
  "        top: 10px;\n" +
  "        -moz-user-select: none;\n" +
  "        -webkit-user-select: none;\n" +
  "        -ms-user-select: none;\n" +
  "        user-select: none;\n" +
  "\n" +
  "        position: absolute;\n" +
  "        z-index: 10000;\n" +
  "        padding: 10px;\n" +
  "        background-color: #222;\n" +
  "        font-size: 10px;\n" +
  "        line-height: 1.2em;\n" +
  "        width: 350px;\n" +
  "        font-family: 'Roboto Condensed', tahoma, sans-serif;\n" +
  "        overflow: hidden;\n" +
  "    }\n" +
  "</style>\n";

import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
import Stats from "three/examples/jsm/libs/stats.module";
import { ThreeLib } from "@root/lib/modules/three/ThreeLib";
import NavMeshPlayer from "@root/lib/modules/controller/pathFindingPlayer/NavMeshPlayer";
import { DebugBtn } from "@root/lib/modules/debug/DebugBtn";
import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
import { LazyServices, Services } from "@aptero/axolotis-player";
import { WorldService } from "@root/lib/modules/worlds/WorldService";
import { FrameLoop } from "@root/lib/modules/frame/FrameLoop";

const rStats = require("./rStats/rStats");
const rStatsExtra = require("./rStats/rStats.extras");

declare const window: any;

export class Factory implements WebpackLazyModule, Service<PerformanceRStats> {
  async createService(services: LazyServices): Promise<PerformanceRStats> {
    let threeLib = await services.getService<ThreeLib>(
      "@aptero/axolotis-core-plugins/three/ThreeLib"
    );
    let frameLoop = await services.getService<FrameLoop>(
      "@aptero/axolotis-core-plugins/frame/FrameLoop"
    );
    let worldService = await services.getService<WorldService>(
      "@aptero/axolotis-core-plugins/worlds/WorldService"
    );
    return new PerformanceRStats(threeLib, frameLoop, worldService);
  }
}

export class PerformanceRStats implements Component {
  private rS: any;
  constructor(
    private threeLib: ThreeLib,
    frameLoop: FrameLoop,
    private worldService: WorldService
  ) {
    if (window.perfStatSingletonPresent) {
      return; //Only one debug panel even if multiple world
    }
    window.perfStatSingletonPresent = true;
    console.warn(
      "MB MBytes of allocated memory. (Run Chrome with --enable-precise-memory-info) to have precise perf info"
    );
    const stats = Stats();
    stats.showPanel(2);
    document.body.appendChild(stats.dom);
    this.updateRstats();
    window.document.body.insertAdjacentHTML("beforeend", html);
    if (worldService.isActiveWorld()) {
      const animate = (t) => {
        //Avoir using frameloop for this so it does not appear on perf
        requestAnimationFrame(animate);
        stats.update();
        this.rS().update();
        this.rS("framerate").end();
        this.rS("framerate").start();
      };
      requestAnimationFrame(animate);
    }

    worldService.addOnWorldAdded(() => {
      this.updateWorldCallback();
    }, true);
  }

  updateRstats() {
    let elementsByClassName = document.body.getElementsByClassName("rs-base");
    if (elementsByClassName.length != 0) {
      elementsByClassName[0].remove();
    }
    //https://spite.github.io/rstats/
    const threeStats = new window.threeStats(this.threeLib.renderer);
    //const glS = new window.glStats(); // init at any point
    const plugins = [threeStats];
    let config: any = {
      css: [], // Our stylesheet is injected from AFrame.
      values: {
        framerate: { caption: "Frame (ms)", over: 19 }, //17 ms = 60fps
      },
      groups: [],
      plugins: plugins,
    };
    for (let i = 0; i < this.worldService.getWorlds().length; i++) {
      config.values[FrameLoop.name.toLowerCase() + "-" + i] = {
        caption: FrameLoop.name + " (ms)",
        over: 10,
      };
      config.values[ThreeLib.name.toLowerCase() + "-" + i] = {
        caption: ThreeLib.name + " (ms)",
      };
      config.values[NavMeshPlayer.name.toLowerCase() + "-" + i] = {
        caption: NavMeshPlayer.name + " (ms)",
      };
      config.values[DebugBtn.name.toLowerCase() + "-" + i] = {
        caption: DebugBtn.name + " (ms)",
      };
      config.values[PerformanceRStats.name.toLowerCase() + "-" + i] = {
        caption: PerformanceRStats.name + " (ms)",
      };
      //config.values[PortalsService.name.toLowerCase()+"-"+i] = { caption: PortalsService.name + " (ms)" };
      config.groups.push({
        caption: "World - " + i,
        values: [
          FrameLoop.name.toLowerCase() + "-" + i,
          ThreeLib.name.toLowerCase() + "-" + i,
          NavMeshPlayer.name.toLowerCase() + "-" + i,
        ],
        //PortalsService.name.toLowerCase()+"-"+i]
      });
    }
    this.rS = new rStats(config);
  }

  updateWorldCallback() {
    console.log("new world :", this.worldService.getWorlds());
    this.updateRstats();
    this.worldService.getWorlds().forEach(async (world, index) => {
      let services = world.getFirstComponentByType<Services>(Services.name);
      let frameLoop = await services.getService<FrameLoop>(
        "@aptero/axolotis-core-plugins/frame/FrameLoop"
      );
      frameLoop.setMonitoringCallback(
        (name) => {
          this.rS(name.toLowerCase() + "-" + index).start();
        },
        (name) => {
          this.rS(name.toLowerCase() + "-" + index).end();
        }
      );
    });
  }

  getType(): string {
    return PerformanceRStats.name;
  }
}
