import {Component} from "@aptero/axolotis-player";
import {Service} from "@aptero/axolotis-player";
import {LazyServices} from "@aptero/axolotis-player";

export class ServiceExample implements Component{
    constructor() {
        console.log("ServiceExample created");
    }

    addTextToElement(text:string){
        console.log("ServiceExample serviceFunction : "+text);
    }

    getType(): string {
        return ServiceExample.name;
    }
}

export class Factory implements Service<ServiceExample>{
    constructor() {}

    async createService(services:LazyServices): Promise<ServiceExample> {
        return new ServiceExample();
    }
}

