import Component from "@aptero/axolotis-player";
import { FrameLoop } from "@aptero/axolotis-player";
import { WebpackLazyModule } from "@aptero/axolotis-player";
import { WorldService } from "@aptero/axolotis-player";
import { ComponentFactory } from "@aptero/axolotis-player";
import {ServiceEntity, WorldEntity} from "@aptero/axolotis-player";

export class ComponentExample implements Component{
    constructor(frameLoop:FrameLoop,worldService:WorldService) {
        console.log("ComponentExample created");
        console.log(worldService.isActiveWorld());
        frameLoop.addLoop("test",()=>{
            //console.log("hello world");
        });
    }

    getType(): string {
        return ComponentExample.name;
    }
}

export class Factory implements WebpackLazyModule, ComponentFactory<ComponentExample>{
    constructor() {}

    async createComponent(world:WorldEntity, config:any): Promise<ComponentExample> {
        let services = world.getFirstComponentByType<ServiceEntity>(ServiceEntity.name);
        let frameLoop = await services.getService<FrameLoop>("@aptero/axolotis-player/modules/FrameLoop");
        let worldService = await services.getService<WorldService>("@aptero/axolotis-player/modules/core/WorldService");
        return new ComponentExample(frameLoop,worldService);
    }
}

