import { ThreeLib } from "@root/modules/three/ThreeLib";
export default class SceneLoader {
    private scene;
    private mesh;
    navMesh: any;
    constructor();
    loadScene(sceneUrl: string, threeLib: ThreeLib): Promise<void>;
}
