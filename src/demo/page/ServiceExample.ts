import Component from "@aptero/axolotis-player";
import { FrameLoop } from "@aptero/axolotis-player";
import { WebpackLazyModule } from "@aptero/axolotis-player";
import { LazyServices, Service } from "@aptero/axolotis-player";
import { WorldService } from "@aptero/axolotis-player";

export class ServiceExample implements Component{
    constructor(frameLoop:FrameLoop,worldService:WorldService) {
        console.log("ServiceExample created");
    }

    getType(): string {
        return ServiceExample.name;
    }
}

export class Factory implements WebpackLazyModule, Service<ServiceExample>{
    constructor() {}

    async createService(services:LazyServices): Promise<ServiceExample> {
        let frameLoop = await services.getService<FrameLoop>("@root/lib/modules/FrameLoop");
        let worldService = await services.getService<WorldService>("@root/lib/modules/core/WorldService");
        return new ServiceExample(frameLoop,worldService);
    }
}

