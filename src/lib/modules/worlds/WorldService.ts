import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
import {
  Service,
  InitialComponentLoader,
  LazyServices,
  Services,
  WorldEntity,
  Component,
  CODE_LOADER_MODULE_NAME,
  getGlobalStorage,
} from "@aptero/axolotis-player";
import { FrameLoop } from "@root/lib/modules/frame/FrameLoop";
import { ThreeLib } from "@root/lib/modules/three/ThreeLib";

export class Factory implements WebpackLazyModule, Service<WorldService> {
  constructor() {}

  async createService(services: LazyServices): Promise<WorldService> {
    return new WorldService(
      services,
      await services.getService<FrameLoop>(
        "@aptero/axolotis-core-plugins/frame/FrameLoop"
      ),
      await services.getService<ThreeLib>(
        "@aptero/axolotis-core-plugins/three/ThreeLib"
      )
    );
  }
}

let addOnWorldChangeCallback: (() => void)[] = []; //do not use events emitter here to avoid surcharing dependencies in the code modules
let addOnWorldAddedCallback: (() => void)[] = []; //do not use events emitter here to avoid surcharing dependencies in the code modules

interface Worlds {
  activeWorld: string;
  worlds: { [id: string]: WorldEntity };
}

if (!getGlobalStorage<Worlds>("worlds").activeWorld) {
  //initialize world service
  getGlobalStorage<Worlds>("worlds").worlds = {};
  getGlobalStorage<Worlds>("worlds").activeWorld = "NONE";
}

export class Name implements Component {
  constructor(public name: string) {}
  getType(): string {
    return Name.name;
  }
}
let worldNumber = 0;
export function registerNewWorld(worldEntity: WorldEntity) {
  const worlds = getGlobalStorage<Worlds>("worlds");
  let componentByType = worldEntity.getFirstComponentByType<Name>(Name.name);
  if (!componentByType) {
    worldEntity.addComponent<Name>(new Name("World-" + worldNumber++));
  }
  let worldName = worldEntity.getFirstComponentByType<Name>(Name.name).name;
  worlds.worlds[worldName] = worldEntity;
  if (worlds.activeWorld === "NONE") {
    worlds.activeWorld = worldName;
  }
}

export class WorldService implements Component {
  private world: WorldEntity;

  constructor(
    services: LazyServices,
    frameLoop: FrameLoop,
    threeLib: ThreeLib
  ) {
    registerNewWorld(services.getWorld());
    console.log("info");
    let worldtmp: any = null;
    for (const key in this.getWorlds()) {
      const world = this.getWorlds()[key];
      let wservices = world.getFirstComponentByType<Services>(Services.name);
      if (wservices == services) {
        worldtmp = world;
      }
    }
    if (!worldtmp) {
      throw new Error();
    }
    this.world = worldtmp;

    //new world service is new world event
    services
      .getService<InitialComponentLoader>(CODE_LOADER_MODULE_NAME)
      .then(async (codeLoader) => {
        await codeLoader.awaitInitialLoading();
        for (const callback of addOnWorldAddedCallback) {
          callback();
        }
      });
    const worlds = getGlobalStorage<Worlds>("worlds");
    if (worlds.activeWorld !== "NONE") {
      this.setActiveWorldByName(worlds.activeWorld);
    }

    /*
    TODO there is a bug with this portal system
    this.addOnWorldChangeCallback(() => {
      window.removeEventListener("resize", threeLib.onWindowResize);
      frameLoop.removeLoop(ThreeLib.name);
      if (this.isActiveWorld()) {
        window.addEventListener("resize", threeLib.onWindowResize, false);
        frameLoop.addLoop(ThreeLib.name, threeLib.render);
      }
    }, true);*/
  }

  getType(): string {
    return WorldService.name;
  }

  getWorlds(): { [id: string]: WorldEntity } {
    let globalStorage = getGlobalStorage<Worlds>("worlds");
    return globalStorage.worlds;
  }

  getActiveWorld() {
    let globalStorage = getGlobalStorage<Worlds>("worlds");
    return this.getWorlds()[globalStorage.activeWorld];
  }

  isActiveWorld() {
    return this.world == this.getActiveWorld();
  }

  addOnWorldChangeCallback(callback: () => void, init: boolean = false) {
    addOnWorldChangeCallback.push(callback);
    if (init) {
      callback();
    }
  }

  addOnWorldAdded(callback: () => void, init: boolean = false) {
    addOnWorldAddedCallback.push(callback);
    if (init) {
      callback();
    }
  }

  setActiveWorld(world: WorldEntity) {
    for (const key in this.getWorlds()) {
      if (world == this.getWorlds()[key]) {
        this.setActiveWorldByName(key);
        return;
      }
    }
    throw new Error();
  }

  setActiveWorldByName(name: string) {
    let globalStorage = getGlobalStorage<Worlds>("worlds");
    if (globalStorage.activeWorld !== name) {
      globalStorage.activeWorld = name;
      for (const callback of addOnWorldChangeCallback) {
        callback();
      }
    }
  }
}
