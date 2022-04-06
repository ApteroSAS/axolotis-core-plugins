import { Vector3 } from "three";
import * as THREE from "three";
export declare class NavMeshPathfinder {
    private pathfinder;
    private mesh;
    private zone;
    private navGroup;
    private navNode;
    isEnabled(): boolean;
    loadMesh(mesh: any, zone?: string): void;
    getClosestNode(pos: any): any;
    findPOVPositionAboveNavMesh: (startPOVPosition: THREE.Vector3, desiredPOVPosition: THREE.Vector3, outPOVPosition: THREE.Vector3) => Vector3;
    findPositionOnNavMesh(start: Vector3, end: Vector3, outPos: Vector3, shouldRecomputeGroupAndNode?: boolean): Vector3;
    removeNavMeshData(): void;
}
