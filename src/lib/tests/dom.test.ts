/**
 * @jest-environment jsdom
 */


import { initHtml } from "@aptero/axolotis-player";
import { registerLocalModule } from "@aptero/axolotis-player";
import "../Index";//import axolotis core plugins
it('dom init test1', () => {

});
/*
it('dom init test', () => {
  document.body.innerHTML = "<ax-scene>\n" +
      "    <ax-entity>\n" +
      "        <ax-component module=\"@aptero/axolotis-core-plugins/sky/Sky\" config='{skymap:\"assets/static/default/sky.jpg\"}'></ax-component>\n" +
      "        <ax-component module=\"@aptero/axolotis-core-plugins/spoke/SpokeRoomLoader\" config='{\"room\": \"yUXD7A2\"}'></ax-component>\n" +
      "        <ax-component module=\"@aptero/axolotis-core-plugins/controller/pathFindingPlayer/NavMeshPlayer\" config='{\n" +
      "        \"position\": {\n" +
      "          \"x\": 0,\n" +
      "          \"y\": 1,\n" +
      "          \"z\": 0\n" +
      "        }\n" +
      "      }'></ax-component>\n" +
      "        <ax-component module=\"@local/ComponentExample\" config='{text:\"Hello Basic\"}'></ax-component>\n" +
      "    </ax-entity>\n" +
      "</ax-scene>";

  registerLocalModule("@local/ComponentExample", async () => {
    const module = await import("@root/demo/page/basic/ComponentExample");
    return {module, classname: module.Factory.name}
  });
  registerLocalModule("@local/ServiceExample", async () => {
    const module = await import("@root/demo/page/basic/ServiceExample");
    return {module, classname: module.Factory.name}
  });

  initHtml({
    onProgress: (progress, total) => {    },
    onLoaded: () => {    }
  });
  console.log("hello");

  initHtml();

});*/
