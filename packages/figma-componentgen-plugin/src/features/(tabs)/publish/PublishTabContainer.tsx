import { MappingTableType } from "@moeum/shared/type/component";
import { useMemo } from "react";
import { PublishService } from "./service/PublishService";
import { PublishTabPage } from "./PublishTabPage";

export const PublishTabContainer = ({
  data,
  mappingTable,
}: {
  data: SceneNode[];
  mappingTable: MappingTableType;
}) => {
  const publishService = useMemo(
    () => new PublishService(mappingTable),
    [mappingTable]
  );

  // FigmaNode -> LayerNode (JSON)
  const layerNode = useMemo(
    () => (data ? publishService.figmaNodeToLayerNode(data) : null),
    [data, publishService]
  );

  // LayerNode -> ComponentNode (JSON)
  const componentNode = useMemo(
    () =>
      layerNode ? publishService.layerNodeToComponentNode(layerNode) : null,
    [layerNode, publishService]
  );

  // ComponentNode -> String
  const componentString = useMemo(
    () => (layerNode ? publishService.componentNodeToString(layerNode) : null),
    [layerNode, publishService]
  );

  const handleCopyLayerNode = () => {
    if (layerNode) {
      publishService.copyToClipboard(JSON.parse(layerNode));
    }
  };

  const handleCopyComponentNode = () => {
    if (componentNode) {
      publishService.copyToClipboard(JSON.parse(componentNode));
    }
  };

  const handleCopyComponentString = () => {
    if (componentString) {
      const formattedCode = componentString
        .replace(/\\n/g, "")
        .replace(/\\"/g, '"')
        .replace(/^"|"$/g, "")
        .trim();
      publishService.copyToClipboard(formattedCode, false);
    }
  };

  return (
    <PublishTabPage
      layerNode={layerNode}
      componentNode={componentNode}
      componentString={componentString}
      onCopyToClipboardForLayerNode={handleCopyLayerNode}
      onCopyToClipboardForComponentNode={handleCopyComponentNode}
      onCopyToClipboardForComponent={handleCopyComponentString}
    />
  );
};
