

import { initHtml } from "@aptero/axolotis-player";
import {registerLocalModule} from "@aptero/axolotis-player";

registerLocalModule("@root/demo/page/ServiceExample", ()=>{return import("@root/demo/page/ServiceExample")});
registerLocalModule("@root/demo/page/ComponentExample", ()=>{return import("@root/demo/page/ComponentExample")});
registerLocalModule("@root/lib/modules/three/ThreeLib", ()=>{return import("@root/lib/modules/three/ThreeLib")});
registerLocalModule("@root/lib/modules/Sky", ()=>{return import("@root/lib/modules/Sky")});

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
