import { useMemo } from "react";
import { notify } from "@moeum/utils/notify";
import { copyToClipboard } from "@moeum/utils/copyToClipboard";
import { FigmaNode, figmaToJson } from "@moeum/utils/figmaToJson";
import { jsonToComponent } from "@moeum/utils/jsonToCompoenent";
import { MappingTableType } from "@moeum/shared/type/component";
import { PublishTabPage } from "./PublishTabPage";

export const PublishTabContainer = ({
  data,
  mappingTable,
}: {
  data: any;
  mappingTable: MappingTableType;
}) => {
  const nodeToJson = useMemo(
    () =>
      data
        ? JSON.stringify(
            figmaToJson(data as FigmaNode[], mappingTable),
            null,
            2
          )
        : null,
    [data]
  );

  const jsonToLayer = useMemo(
    () =>
      data
        ? JSON.stringify(
            figmaToJson(data as FigmaNode[], mappingTable),
            null,
            2
          )
        : null,
    [data]
  );

  const layerToComponent = useMemo(
    () => (jsonToLayer ? jsonToComponent(JSON.parse(jsonToLayer)) : null),
    [jsonToLayer]
  );

  const handleCopyToClipboard = () => {
    if (nodeToJson) {
      copyToClipboard(nodeToJson);
      notify("복사 성공");
    }
  };

  const handleCopyToClipboardForJson = () => {
    if (jsonToLayer) {
      copyToClipboard(JSON.parse(jsonToLayer));
      notify("복사 성공");
    }
  };

  const handleCopyToClipboardForComponent = () => {
    if (layerToComponent) {
      const codeBlock = layerToComponent
        .replace(/\\n/g, "") // 개행문자 처리
        .replace(/\\"/g, '"') // 따옴표 처리
        .replace(/^"|"$/g, "") // 문자열 시작/끝의 따옴표 제거
        .trim();
      copyToClipboard(codeBlock, false);
      notify("복사 성공");
    }
  };

  return (
    <PublishTabPage
      nodeToJson={nodeToJson}
      jsonToLayer={jsonToLayer}
      layerToComponent={layerToComponent}
      onCopyToClipboard={handleCopyToClipboard}
      onCopyToClipboardForJson={handleCopyToClipboardForJson}
      onCopyToClipboardForComponent={handleCopyToClipboardForComponent}
    />
  );
};
