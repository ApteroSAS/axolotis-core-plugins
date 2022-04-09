import { registerLocalModuleList } from "@aptero/axolotis-player";
import { loadModules } from "@root/lib/generated/webpack/module/WebpackLoader";
export function load() {
  const modules = loadModules();
  registerLocalModuleList(modules);
}

load();
