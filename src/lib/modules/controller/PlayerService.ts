import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
import * as THREE from "three";
import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
import { LazyServices } from "@aptero/axolotis-player/build/types";
import { Service } from "@aptero/axolotis-player/build/types/modules/core/ecs/Service";

export class Factory implements WebpackLazyModule, Service<PlayerService> {
  async createService(services: LazyServices): Promise<PlayerService> {
    return new PlayerService();
  }
}

export interface Player {
  declareNavMesh(navMesh: THREE.Mesh);
  askFlyMode();
  teleportToLocation(x: number, y: number, z: number);
  getHeadPosition(targetCopy: THREE.Vector3): void;
}

/**
 * Should be loosly coupled since multiple implementation of player will be behind that.
 */
export class PlayerService implements Component {
  player: Player | null = null;

  getType(): string {
    return PlayerService.name;
  }

  declarePlayer(player: Player) {
    if (this.player) {
      throw new Error();
    }
    this.player = player;
  }

  getCurrentPlayer(): Player {
    if (!this.player) {
      throw new Error();
    }
    return this.player;
  }
}
