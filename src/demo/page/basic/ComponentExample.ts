import {ServiceExample} from "./ServiceExample";
import {ComponentFactory} from "@aptero/axolotis-player/build/types/modules/core/ecs/ComponentFactory";
import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
import {Services, WorldEntity} from "@aptero/axolotis-player";

export class ComponentExample implements Component{
    constructor(service:ServiceExample,config:{text:string}) {
        console.log("ComponentExample created");
        service.addTextToElement(config.text);
    }

    getType(): string {
        return ComponentExample.name;
    }
}

export class Factory implements ComponentFactory<ComponentExample>{
    constructor() {}

    async createComponent(world:WorldEntity, config:any): Promise<ComponentExample> {
        let services = world.getFirstComponentByType<Services>(Services.name);
        let serviceExample = await services.getService<ServiceExample>("@local/ServiceExample");
        return new ComponentExample(serviceExample,config);
    }
}

