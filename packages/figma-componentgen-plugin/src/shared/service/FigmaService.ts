export class FigmaService {
  static notify(message: string): void {
    parent.postMessage(
      {
        pluginMessage: {
          type: "notify",
          message,
        },
      },
      "*"
    );
  }

  static postMessage(type: string, payload: any): void {
    figma.ui.postMessage({ type, payload });
  }

  static async getStorage(key: string): Promise<any> {
    parent.postMessage(
      {
        pluginMessage: {
          type: "getMappingTable",
          key,
        },
      },
      "*"
    );
  }

  static async setStorage(key: string, value: any): Promise<void> {
    parent.postMessage(
      {
        pluginMessage: {
          type: "setMappingTable",
          key,
          data: value,
        },
      },
      "*"
    );
  }
}
