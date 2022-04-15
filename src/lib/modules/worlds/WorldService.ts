import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
import { Service } from "@aptero/axolotis-player/build/types/modules/core/ecs/Service";
import {
  InitialComponentLoader,
  LazyServices,
  Services,
  WorldEntity,
} from "@aptero/axolotis-player";
import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
import {
  CODE_LOADER_MODULE_NAME,
  getGlobalStorage,
} from "@aptero/axolotis-player";

export class Factory implements WebpackLazyModule, Service<WorldService> {
  constructor() {}

  async createService(services: LazyServices): Promise<WorldService> {
    return new WorldService(services);
  }
}

let addOnWorldChangeCallback: (() => void)[] = []; //do not use events emitter here to avoid surcharing dependencies in the code modules
let addOnWorldAddedCallback: (() => void)[] = []; //do not use events emitter here to avoid surcharing dependencies in the code modules
interface Worlds {
  world: WorldEntity;
  activeWorld: number;
  worlds: WorldEntity[];
}

if (!getGlobalStorage<Worlds>("worlds").activeWorld) {
  //initialize world service
  getGlobalStorage<Worlds>("worlds").worlds = [];
  getGlobalStorage<Worlds>("worlds").activeWorld = -1;
}

export function registerNewWorld(worldEntity: WorldEntity) {
  //TODO have a way to identify world and guarantee unicity here
  const worlds = getGlobalStorage<Worlds>("worlds");
  worlds.worlds.push(worldEntity);
  if (worlds.activeWorld < 0) {
    worlds.activeWorld = 0;
    worlds.world = worlds.worlds[worlds.activeWorld];
  }
}

export class WorldService implements Component {
  private world: WorldEntity;

  constructor(services: LazyServices) {
    registerNewWorld(services.getWorld());
    console.log("info");
    let worldtmp: any = null;
    for (const world of this.getWorlds()) {
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
        codeLoader.awaitInitialLoading();
        for (const callback of addOnWorldAddedCallback) {
          callback();
        }
      });

    if (getGlobalStorage<Worlds>("worlds").activeWorld >= 0) {
      this.setActiveWorldByNumber(
        getGlobalStorage<Worlds>("worlds").activeWorld
      );
    }
  }

  getType(): string {
    return WorldService.name;
  }

  getWorlds(): WorldEntity[] {
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
    for (let i = 0; i < this.getWorlds().length; i++) {
      if (world == this.getWorlds()[i]) {
        this.setActiveWorldByNumber(i);
        return;
      }
    }
    throw new Error();
  }

  setActiveWorldByNumber(number: number) {
    if (getGlobalStorage<Worlds>("worlds").activeWorld != number) {
      getGlobalStorage<Worlds>("worlds").activeWorld = number;
      getGlobalStorage<Worlds>("worlds").world = this.getWorlds()[number];
      for (const callback of addOnWorldChangeCallback) {
        callback();
      }
    }
  }
}
