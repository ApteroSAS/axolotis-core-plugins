import { Component } from "@aptero/axolotis-player";
import * as THREE from "three";
import { WebpackLazyModule } from "@root/lib/generated/webpack/WebpackLoader";
import { LazyServices } from "@aptero/axolotis-player";
import { Service } from "@aptero/axolotis-player";
export declare class Factory implements WebpackLazyModule, Service<PlayerService> {
    createService(services: LazyServices): Promise<PlayerService>;
}
export interface Player {
    declareNavMesh(navMesh: THREE.Mesh): any;
    askFlyMode(): any;
    teleportToLocation(x: number, y: number, z: number): any;
    getHeadPosition(targetCopy: THREE.Vector3): void;
}
/**
 * Should be loosly coupled since multiple implementation of player will be behind that.
 */
export declare class PlayerService implements Component {
    player: Player | null;
    getType(): string;
    declarePlayer(player: Player): void;
    getCurrentPlayer(): Player;
}
