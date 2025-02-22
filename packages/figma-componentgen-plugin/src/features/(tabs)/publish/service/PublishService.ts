import { Component } from "@moeum/shared/entity/Component";
import { Layer } from "@moeum/shared/entity/Layer";
import { FigmaService } from "@moeum/shared/service/FigmaService";
import { MappingTableType } from "@moeum/shared/type/component";

export class PublishService {
  constructor(private readonly mappingTable: MappingTableType) {}

  figmaNodeToLayerNode(nodes: SceneNode[]): string | null {
    try {
      const layers = nodes?.map((node) => Layer.fromFigmaNode(node));

      return JSON.stringify(
        layers?.map((layer) => layer.toJSON()),
        null,
        2
      );
    } catch (error) {
      FigmaService.notify("변환 실패: " + error.message);
      return null;
    }
  }

  layerNodeToComponentNode(layerNodeJson: string): string {
    const layerNodes = JSON.parse(layerNodeJson);
    if (!layerNodes.length) {
      return JSON.stringify({}, null, 2);
    }
    const componentNode = Component.fromLayer(layerNodes[0], this.mappingTable);
    return JSON.stringify(componentNode, null, 2);
  }

  componentNodeToString(layerNodeJson: string): string {
    const layerNodes = JSON.parse(layerNodeJson);
    if (!layerNodes.length) {
      return JSON.stringify({}, null, 2);
    }
    const componentNode = Component.fromLayer(layerNodes[0], this.mappingTable);
    return componentNode.toComponent();
  }

  copyToClipboard(content: string | object, shouldStringify: boolean = true) {
    try {
      const text = shouldStringify ? JSON.stringify(content, null, 2) : content;

      const textarea = document.createElement("textarea");
      textarea.value = text as string;

      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, 9999);

      document.execCommand("copy");
      document.body.removeChild(textarea);

      FigmaService.notify("복사 성공");
    } catch (error) {
      FigmaService.notify("복사 실패");
    }
  }
}
