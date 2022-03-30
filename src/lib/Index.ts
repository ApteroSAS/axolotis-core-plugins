import { registerLocalModuleList } from "@aptero/axolotis-player";
import { loadModules } from "@root/lib/generated/webpack/module/WebpackLoader";
export function load() {
  console.log("axolotis core plugins loaded");
  registerLocalModuleList(loadModules());
}

load();
