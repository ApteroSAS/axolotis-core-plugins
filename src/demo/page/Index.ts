import { initHtml } from "@aptero/axolotis-player";
import {registerLocalModule} from "@aptero/axolotis-player";

registerLocalModule("@root/demo/page/ServiceExample", ()=>{return import("@root/demo/page/ServiceExample")});
registerLocalModule("@root/demo/page/ComponentExample", ()=>{return import("@root/demo/page/ComponentExample")});
registerLocalModule("@root/lib/modules/three/ThreeLib", ()=>{return import("@root/lib/modules/three/ThreeLib")});
registerLocalModule("@root/lib/modules/Sky", ()=>{return import("@root/lib/modules/Sky")});
registerLocalModule("@root/lib/modules/spoke/SpokeRoomLoader", ()=>{return import("@root/lib/modules/spoke/SpokeRoomLoader")});
registerLocalModule("@root/lib/modules/controller/pathFindingPlayer/NavMeshPlayer", ()=>{return import("@root/lib/modules/controller/pathFindingPlayer/NavMeshPlayer")});
registerLocalModule("@root/lib/modules/debug/DebugBtn", ()=>{return import("@root/lib/modules/debug/DebugBtn")});
registerLocalModule("@root/lib/modules/controller/PlayerService", ()=>{return import("@root/lib/modules/controller/PlayerService")});
registerLocalModule("@root/lib/modules/controller/pathFindingPlayer/Input", ()=>{return import("@root/lib/modules/controller/pathFindingPlayer/Input")});
registerLocalModule("@root/lib/modules/debug/PerformanceStats", ()=>{return import("@root/lib/modules/debug/PerformanceStats")});

initHtml({
    onProgress: (progress, total) => {
        console.log("[" + progress + "/" + total + "]");
        const progressbar: any = document.getElementById("progress");
        progressbar.style.width = `${(progress / total) * 100}%`;
    },
    onLoaded: () => {
        console.log("loading complete");
        (document.getElementById("progresscontainer") as any).className += "load";
    }
});
console.log("hello");
