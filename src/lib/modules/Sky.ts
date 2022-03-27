import * as THREE from 'three';
//import { ComponentFactory,WorldEntity,WebpackLazyModule,ServiceEntity,Component} from "@aptero/axolotis-player";

import { ServiceEntity} from "@aptero/axolotis-player";
import Component from '@aptero/axolotis-player/build/types/modules/core/ecs/Component'
import { WebpackLazyModule } from "@aptero/axolotis-player/build/types/modules/core/loader/WebpackLoader";
import { ComponentFactory } from "@aptero/axolotis-player/build/types/modules/core/ecs/ComponentFactory";
import { WorldEntity } from "@aptero/axolotis-player/build/types/modules/core/ecs/WorldEntity";
//import { ServiceEntity } from "@aptero/axolotis-player/build/types/modules/core/service/ServiceEntity";

import {ThreeLib} from "@root/lib/modules/three/ThreeLib";

export class Factory implements WebpackLazyModule, ComponentFactory<Sky>{
    async createComponent(world:WorldEntity, config:any): Promise<Sky> {
        let services = world.getFirstComponentByType<ServiceEntity>(ServiceEntity.name);
        let three = await services.getService<ThreeLib>("@root/lib/modules/three/ThreeLib");
        let sky = new Sky();
        await sky.initialize(three,config.skymap);//"assets/static/demo2/sky.jpg"
        return sky;
    }
}

export default class Sky implements Component{
    private scene: any;
    private texture: any;
    constructor(){
    }

    getType(): string {
        return "Sky";
    }

    async initialize(three:ThreeLib,skymap:string){
        this.scene = three.scene;
        this.texture = await three.loadAssets(skymap);
        const hemiLight = new THREE.HemisphereLight(0xFFFFFF, 0xFFFFFFF, 1);
        hemiLight.color.setHSL(0.6, 1, 0.6);
        hemiLight.groundColor.setHSL(0.095, 1, 0.75);
        this.scene.add(hemiLight);

        const skyGeo = new THREE.SphereGeometry(1000, 25, 25);
        const skyMat = new THREE.MeshBasicMaterial({
             map: this.texture,
             side: THREE.BackSide,
             depthWrite: false,
             toneMapped: false
            });
        const sky = new THREE.Mesh(skyGeo, skyMat);
        sky.rotateY(THREE.MathUtils.degToRad(-60));
        this.scene.add(sky);
    }
}
