import * as THREE from "three";
import { WebpackLazyModule } from "@aptero/axolotis-player/build/types/modules/core/loader/WebpackLoader";
import { WorldEntity } from "@aptero/axolotis-player/build/types/modules/core/ecs/WorldEntity";
import { ThreeLib } from "@root/lib/modules/three/ThreeLib";
import { PortalsService } from "./PortalsService";
import { PlayerService } from "../controller/PlayerService";
import { WorldService } from "@aptero/axolotis-player/build/types/modules/core/WorldService";
import { ComponentFactory } from "@aptero/axolotis-player/build/types/modules/core/ecs/ComponentFactory";
import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
export declare class Factory implements WebpackLazyModule, ComponentFactory<PortalLink> {
    createComponent(world: WorldEntity, config: {
        url: string;
        in: {
            x: number;
            y: number;
            z: number;
        };
        out: {
            x: number;
            y: number;
            z: number;
        };
    }): Promise<PortalLink>;
}
export declare class PortalLink implements Component {
    private portals;
    private three;
    private playerService;
    private worldService;
    private inPosition;
    private outPosition;
    private otherCamera;
    private portalA;
    private portalB;
    private targetWorld;
    private targetThreeLib;
    private boundingBox;
    private targetLink;
    private portalPlane;
    private targetPlayerService;
    setTargetWorld(world: WorldEntity): Promise<void>;
    constructor(portals: PortalsService, three: ThreeLib, playerService: PlayerService, worldService: WorldService, inPosition: {
        position: THREE.Vector3;
        rotation?: THREE.Euler;
    }, outPosition: {
        position: THREE.Vector3;
        rotation?: THREE.Euler;
    });
    tmpPos: THREE.Vector3;
    tmpDir: THREE.Vector3;
    tmpBox: THREE.Box3;
    tmpPlane: THREE.Plane;
    collidingLastFrame: boolean;
    lastDistance: number;
    gracePeriode: number;
    computerPortalEnter(): void;
    renderPortal(): void;
    getType(): string;
}
