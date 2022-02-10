type Factory = () => any;

interface Container {
  init(shareScope: string): void;

  get(module: string): Factory;
}

declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: string };

export enum FileType {
  Component = 'Component',
  Module = 'Module',
  Css = 'CSS',
  Html = 'Html'
}

export interface LoadRemoteFileOptions {
  remoteEntry: string;
  remoteName: string;
  exposedFile: string;
  exposeFileType: FileType;
}

export class MfeUtil {
  // holds list of loaded script
  private fileMap: Record<string, boolean> = {};

  async loadRemoteFile (loadRemoteModuleOptions: LoadRemoteFileOptions): Promise<any> {
    await this.loadRemoteEntry(loadRemoteModuleOptions.remoteEntry);
    return await this.findExposedModule<any>(
      loadRemoteModuleOptions.remoteName,
      loadRemoteModuleOptions.exposedFile
    );
  }

  private findExposedModule = async <T>(uniqueName: string, exposedFile: string): Promise<T | undefined> => {
    let Module: T | undefined;
    // Initializes the shared scope. Fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__('default');
    const container: Container = (window as any)[uniqueName];  // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await container.get(exposedFile);
    Module = factory();
    return Module
  }

  private async loadRemoteEntry (remoteEntry: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const scriptId = `${remoteEntry.substring(remoteEntry.lastIndexOf('/') + 1)}`;
      const getScript = document.getElementById(scriptId);
      if (getScript || this.fileMap[remoteEntry]) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = remoteEntry;
      script.id = scriptId;

      script.onerror = (error: string | Event) => {
        console.error(error, 'unable to load remote entry, show error or something');
        reject();
      }
      script.onload = () => {
        this.fileMap[remoteEntry] = true;
        resolve(); // window is the global namespace
      };
      document.body.append(script);
    });
  }
}
