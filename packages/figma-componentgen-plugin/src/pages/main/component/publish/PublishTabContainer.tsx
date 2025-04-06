import { MappingTableType } from "@moeum/shared/type/component";
import { useMemo } from "react";
import { PublishService } from "./service/PublishService";
import { PublishTabScreen } from "./PublishTabScreen";
import { FigmaService } from "@moeum/shared/service/FigmaService";
import { PublishException } from "./exception/PublishException";

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
    try {
      if (layerNode) {
        publishService.copyToClipboard(JSON.parse(layerNode));
        FigmaService.notify("복사 성공");
      }
    } catch (error) {
      if (error instanceof PublishException) {
        FigmaService.notify(error.message);
      }
    }
  };

  const handleCopyComponentNode = () => {
    try {
      if (componentNode) {
        publishService.copyToClipboard(JSON.parse(componentNode));
        FigmaService.notify("복사 성공");
      }
    } catch (error) {
      if (error instanceof PublishException) {
        FigmaService.notify(error.message);
      }
    }
  };

  const handleCopyComponentString = () => {
    try {
      if (componentString) {
        const formattedCode = componentString
          .replace(/\\n/g, "")
          .replace(/\\"/g, '"')
          .replace(/^"|"$/g, "")
          .trim();
        publishService.copyToClipboard(formattedCode, false);
        FigmaService.notify("복사 성공");
      }
    } catch (error) {
      if (error instanceof PublishException) {
        FigmaService.notify(error.message);
      }
    }
  };

  return (
    <PublishTabScreen
      layerNode={layerNode}
      componentNode={componentNode}
      componentString={componentString}
      onCopyToClipboardForLayerNode={handleCopyLayerNode}
      onCopyToClipboardForComponentNode={handleCopyComponentNode}
      onCopyToClipboardForComponent={handleCopyComponentString}
    />
  );
};
