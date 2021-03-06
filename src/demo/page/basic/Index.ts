import { initHtml } from "@aptero/axolotis-player";
import { registerLocalModule } from "@aptero/axolotis-player";
import "./../../../lib/Index";//import axolotis core plugins

registerLocalModule("@local/ComponentExample", async () => {
    const module = await import('@root/demo/page/basic/ComponentExample');
    return {module, classname: module.Factory.name}
});
registerLocalModule("@local/ServiceExample", async () => {
    const module = await import("@root/demo/page/basic/ServiceExample");
    return {module, classname: module.Factory.name}
});

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
