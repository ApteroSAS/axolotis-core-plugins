export declare class AssetsLoader {
    loaderCache: {};
    assets: {};
    getLoader(loaderName: string, loaderLoader: () => void): Promise<any>;
}
export declare const assetsLoader: AssetsLoader;
