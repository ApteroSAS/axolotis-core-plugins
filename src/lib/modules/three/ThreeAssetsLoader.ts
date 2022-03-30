export class AssetsLoader {
  loaderCache = {};
  assets = {};

  async getLoader(loaderName: string, loaderLoader: () => void) {
    if (!this.loaderCache[loaderName]) {
      this.loaderCache[loaderName] = await loaderLoader();
    }
    return this.loaderCache[loaderName];
  }
}

export const assetsLoader: AssetsLoader = new AssetsLoader();
