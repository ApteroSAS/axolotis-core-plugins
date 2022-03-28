import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
import { WebpackLazyModule } from "@aptero/axolotis-player/build/types/modules/core/loader/WebpackLoader";
import { LazyServices, Service } from "@aptero/axolotis-player/build/types/modules/core/service/LazyServices";
export declare class Input implements Component {
    private _keyMap;
    private events;
    constructor();
    getType(): string;
    _addEventListner(element: any, type: any, callback: any): void;
    AddKeyDownListner(callback: any): void;
    AddKeyUpListner(callback: any): void;
    AddMouseMoveListner(callback: any): void;
    AddClickListner(callback: any): void;
    AddMouseDownListner(callback: any): void;
    AddMouseUpListner(callback: any): void;
    _onKeyDown: (event: any) => void;
    _onKeyUp: (event: any) => void;
    GetKeyDown(code: any): any;
    ClearEventListners(): void;
}
export declare class Factory implements WebpackLazyModule, Service<Input> {
    createService(services: LazyServices): Promise<Input>;
}
