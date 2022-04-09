import { Loader } from "three";
declare class GLTFLoader extends Loader {
    constructor(manager: any);
    load(url: any, onLoad: any, onProgress: any, onError: any): void;
    setDRACOLoader(dracoLoader: any): this;
    setDDSLoader(): void;
    setKTX2Loader(ktx2Loader: any): this;
    setMeshoptDecoder(meshoptDecoder: any): this;
    register(callback: any): this;
    unregister(callback: any): this;
    parse(data: any, path: any, onLoad: any, onError: any): void;
    parseAsync(data: any, path: any): Promise<unknown>;
}
export { GLTFLoader };
