import { Service } from "@aptero/axolotis-player";
import { Component } from "@aptero/axolotis-player";
import Stats from "three/examples/jsm/libs/stats.module";
import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
import { LazyServices, Services } from "@aptero/axolotis-player";
declare const window: any;

export class Factory implements WebpackLazyModule, Service<PerformanceStats> {
  async createService(services: LazyServices): Promise<PerformanceStats> {
    return new PerformanceStats();
  }
}

export class PerformanceStats implements Component {
  constructor() {
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
    const animate = (t) => {
      //Avoir using frameloop for this so it does not appear on perf
      requestAnimationFrame(animate);
      stats.update();
    };
    requestAnimationFrame(animate);
  }

  getType(): string {
    return PerformanceStats.name;
  }
}
