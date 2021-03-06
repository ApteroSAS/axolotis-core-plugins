![CircleCI](https://img.shields.io/circleci/build/github/ApteroSAS/axolotis-core-plugins/main?token=31ab90ba9847874df906492621e7b6861e360ef4) ![GitHub file size in bytes](https://img.shields.io/github/size/ApteroSAS/axolotis-core-plugins/build/index.js) ![Codecov](https://img.shields.io/codecov/c/github/ApteroSAS/axolotis-core-plugins?token=KLLGS2TVNE)

 <div align="center">
 <img align="center" width="230" src="https://cloudflare-ipfs.com/ipfs/bafkreifsgnkf7botlzpwcc2lv57ugwgf3xrmcjrez2kez4qd7o2cs3zjjm" />
  <h2>Axolotis Core Plugins</h2>
  <blockquote>A player that helps to lazy load smart items in order to compose a metaverse space or 3D websites.</blockquote>
  <strong></strong>

</div>

## ⭐️ Features

- ECS system https://en.wikipedia.org/wiki/Entity_component_system
- Scene defined in the DOM, Similar to https://aframe.io/
```
<ax-scene>
    <ax-entity>
        <ax-component module="ComponentExample" config="{position:{x:1,y:2,z:3}}"></ax-component>
    </ax-entity>
    <ax-service module="ServiceExample"></ax-service>
</ax-scene>
```
- Lazy loading of Component and service
Each module is loaded as needed by the code and can be loaded at runtime.
<img src="https://cloudflare-ipfs.com/ipfs/bafkreifeh2bhoxjflljq3btgixhhe4w2fh2ibuzmhjmvsjbb7nhsuswzc4" />
- Scene loaded from multiple origin. Navigate seamlessly between Axolotis-player enabled website
- Each http page with the Axolotis player is a both a 3D Scene and a regular website. This facilitates SEO.

## 📦 Getting Started
### install

```
yarn add git+https://github.com/ApteroSAS/axolotis-player.git
yarn add git+https://github.com/ApteroSAS/axolotis-core-plugins.git

in you main file :
import { registerLocalModule,initHtml } from "@root/lib";
import "@root/lib";

initHtml();


```

### 💎 First component
A component is part of an Entity in the ECS model
A scene can have multiple component.
Is lazy loaded as well.

```typescript
//in Index.ss
registerLocalModule("ComponentExample", ()=>{return import("@root/demo/page/ComponentExample")});
```

```typescript
import Component from "@root/lib/modules/core/ecs/Component";
import { FrameLoop } from "@root/lib/modules/FrameLoop";
import { WebpackLazyModule } from "@root/lib/modules/core/loader/WebpackLoader";
import { ComponentFactory } from "@root/lib/modules/core/ecs/ComponentFactory";
import {ServiceEntity} from "@root/lib";

export class ComponentExample implements Component{
    constructor(frameLoop:FrameLoop) {
        // Here you can use the FrameLoop
    }

    getType(): string {
        return ComponentExample.name;
    }
}

export class Factory implements WebpackLazyModule, ComponentFactory<ComponentExample>{
    async createComponent(world:WorldEntity, config:any): Promise<ComponentExample> {
        // The factory will load the needed service asynchronously to create an instance of this component. 
        // Design patern Factory. 
        // Similar to Angular service injection.
        let services = world.getFirstComponentByType<ServiceEntity>(ServiceEntity.name);
        let frameLoop = await services.getService<FrameLoop>("@root/lib/modules/FrameLoop");
        return new ComponentExample(frameLoop);
    }
}
```
### 🚀 First Service

A service is a Singleton loaded only once per Axolotis page.
Is lazy loaded as well.

```typescript
//in Index.ss
registerLocalModule("ServiceExample", ()=>{return import("@root/demo/page/ServiceExample")});
```

```typescript
import Component from "@root/lib/modules/core/ecs/Component";
import { FrameLoop } from "@root/lib/modules/FrameLoop";
import { WebpackLazyModule } from "@root/lib/modules/core/loader/WebpackLoader";
import { LazyServices, Service } from "@root/lib/modules/core/service/LazyServices";

export class ServiceExample implements Component{
    constructor(frameLoop:FrameLoop) {
        // Here you can use the FrameLoop
    }

    getType(): string {
        return ServiceExample.name;
    }
}

export class Factory implements WebpackLazyModule, Service<ServiceExample>{
constructor() {}

    async createService(services:LazyServices): Promise<ServiceExample> {
        let frameLoop = await services.getService<FrameLoop>("@root/lib/modules/FrameLoop");
        return new ServiceExample(frameLoop,worldService);
    }
}
```

### ✅ Examples / Demo

```
yarn run start

You can find the demo file in the src/demo folder

https://chrisbateman.github.io/webpack-visualizer/
```
