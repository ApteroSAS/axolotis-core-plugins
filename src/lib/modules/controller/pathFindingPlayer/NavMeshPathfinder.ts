import { Pathfinding } from "three-pathfinding";
import { Vector3 } from "three";
import * as THREE from "three";

export class NavMeshPathfinder {
  private pathfinder: Pathfinding;
  private mesh: any;
  private zone: string = "character";
  private navGroup: any = null;
  private navNode: any = null;

  isEnabled(): boolean {
    return this.pathfinder && this.zone in this.pathfinder.zones;
  }

  loadMesh(mesh, zone: string = this.zone) {
    this.pathfinder = new Pathfinding();
    this.mesh = null;
    this.zone = zone;
    if (this.mesh) {
      console.error("tried to load multiple nav meshes");
      this.removeNavMeshData();
    }
    const geometry = mesh.geometry;
    geometry.applyMatrix4(mesh.matrixWorld);
    this.pathfinder.setZoneData(zone, Pathfinding.createZone(geometry));
    this.mesh = mesh;
  }

  getClosestNode(pos) {
    const pathfinder = this.pathfinder;
    if (!pathfinder.zones[this.zone].groups[this.navGroup]) {
      return null;
    }
    return (
      pathfinder.getClosestNode(pos, this.zone, this.navGroup, true) ||
      pathfinder.getClosestNode(pos, this.zone, this.navGroup)
    );
  }

  findPOVPositionAboveNavMesh = (() => {
    const startingFeetPosition = new THREE.Vector3();
    const desiredFeetPosition = new THREE.Vector3();
    // TODO: Here we assume the player is standing straight up, but in VR it is often the case
    // that you want to lean over the edge of a balcony/table that does not have nav mesh below.
    // We should find way to allow leaning over the edge of a balcony and maybe disallow putting
    // your head through a wall.
    return (
        startPOVPosition:THREE.Vector3,
        desiredPOVPosition:THREE.Vector3,
        outPOVPosition:THREE.Vector3
    ) => {
      //const playerHeight = getCurrentPlayerHeight(true);
      const playerHeight = 2;
      startingFeetPosition.copy(startPOVPosition);
      startingFeetPosition.y -= playerHeight;
      desiredFeetPosition.copy(desiredPOVPosition);
      desiredFeetPosition.y -= playerHeight;
      this.findPositionOnNavMesh(
          startingFeetPosition,
          desiredFeetPosition,
          outPOVPosition
      );
      outPOVPosition.y += playerHeight;
      return outPOVPosition;
    };
  })();

  findPositionOnNavMesh(
      start: Vector3,
      end: Vector3,
      outPos: Vector3,
      shouldRecomputeGroupAndNode: boolean = false
  ) {
    const pathfinder = this.pathfinder;
    if (!(this.zone in pathfinder.zones)) return;
    this.navGroup =
        shouldRecomputeGroupAndNode || this.navGroup === null
            ? pathfinder.getGroup(this.zone, end, true, true)
            : this.navGroup;
    this.navNode =
        shouldRecomputeGroupAndNode || this.navNode === null || this.navNode === undefined
            ? this.getClosestNode(end)
            : this.navNode;
    if (this.navNode === null || this.navNode === undefined) {
      // this.navNode can be null if it has never been set or if getClosestNode fails,
      // and it can be undefined if clampStep fails, so we have to check both. We do not
      // simply check if it is falsey (!this.navNode), because 0 (zero) is a valid value,
      // and 0 is falsey.
      outPos.copy(end);
    } else {
      this.navNode = pathfinder.clampStep(start, end, this.navNode, this.zone, this.navGroup, outPos);
    }
    return outPos;
  }

  /*findPositionOnNavMesh(
    start: Vector3,
    end: Vector3,
    outPos: Vector3,
    shouldRecomputeGroupAndNode: boolean = false
  ) {
    const pathfinder = this.pathfinder;
    if (!(this.zone in pathfinder.zones)) return;
    this.navGroup =
      shouldRecomputeGroupAndNode || this.navGroup === null
        ? pathfinder.getGroup(this.zone, end, true, true)
        : this.navGroup;
    this.navNode =
      shouldRecomputeGroupAndNode ||
      this.navNode === null ||
      this.navNode === undefined
        ? this.getClosestNode(end)
        : this.navNode;
    if (this.navNode === null || this.navNode === undefined) {
      // this.navNode can be null if it has never been set or if getClosestNode fails,
      // and it can be undefined if clampStep fails, so we have to check both. We do not
      // simply check if it is falsey (!this.navNode), because 0 (zero) is a valid value,
      // and 0 is falsey.
      outPos.copy(end);
    } else {
      try {
        this.navNode = pathfinder.clampStep(
          start,
          end,
          this.navNode,
          this.zone,
          this.navGroup,
          outPos
        );
      } catch (e) {
        console.error(e);
        outPos.copy(start);
        this.navNode = null;
        this.navGroup = null;
      }
    }
    return outPos;
  }*/

  removeNavMeshData() {
    if (this.mesh && this.mesh.geometry && this.mesh.geometry.dispose) {
      this.mesh.geometry.dispose();
    }
    this.mesh = null;
    this.pathfinder.zones = {};
  }
}
