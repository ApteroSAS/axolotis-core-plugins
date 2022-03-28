import { WebpackLazyModule } from "@aptero/axolotis-player/build/types/modules/core/loader/WebpackLoader";
import { LazyServices, Service } from "@aptero/axolotis-player/build/types/modules/core/service/LazyServices";
import { FrameLoop } from "@aptero/axolotis-player/build/types/modules/FrameLoop";
import Component from "@aptero/axolotis-player/build/types/modules/core/ecs/Component";
import {PerformanceStats} from "@root/lib/modules/debug/PerformanceStats";

export class Factory implements WebpackLazyModule, Service<DebugBtn>{
    async createService(services:LazyServices): Promise<DebugBtn> {
        let frameLoop = await services.getService<FrameLoop>("@root/lib/modules/FrameLoop");
        return new DebugBtn(frameLoop,services);
    }
}

export class DebugBtn implements Component {
    constructor(frameLoop: FrameLoop, serviceEntity: LazyServices) {
        let html = '<div id="debug-btn" style="display: block;\n' +
            '    font-family: monospace;\n' +
            '    cursor: pointer;\n' +
            '    position: absolute;\n' +
            '    bottom: 0;\n' +
            '    right: 2px;\n' +
            '    padding: 4px 8px;\n' +
            '    color: #fff;\n' +
            '    text-shadow: 1px 1px 1px rgba(0,0,0,.5);\n' +
            '    font-size: 10px;\n' +
            '    -moz-user-select: none;\n' +
            '    -webkit-user-select: none;\n' +
            '    -ms-user-select: none;\n' +
            '    user-select: none" >60 FPS</div>';
        window.document.body.insertAdjacentHTML("beforeend", html);
        let elementById = window.document.getElementById("debug-btn");
        if(elementById) {
            elementById.onclick = (evt) => {
                evt.stopPropagation();
                evt.preventDefault();
                serviceEntity.getService<PerformanceStats>("@root/lib/modules/debug/PerformanceStats");
            };
            frameLoop.addLoop(DebugBtn.name, delta => {
                (elementById as any).innerText = Math.round((1.0/delta)*1000)+" FPS";
            })
        }
        if(window.location.host.startsWith("localhost")){
            serviceEntity.getService<PerformanceStats>("@root/lib/modules/debug/PerformanceStats");
        }
    }

    getType(): string {
        return DebugBtn.name;
    }

}
