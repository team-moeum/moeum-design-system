import { useMemo } from "react";
import { notify } from "@moeum/utils/notify";
import { copyToClipboard } from "@moeum/utils/copyToClipboard";
import { FigmaNode, figmaToJson } from "@moeum/utils/figmaToJson";
import { jsonToComponent } from "@moeum/utils/jsonToCompoenent";
import { MappingTableType } from "@moeum/shared/type/component";

export const PublishTabContainer = ({
  data,
  mappingTable,
}: {
  data: any;
  mappingTable: MappingTableType;
}) => {
  const toJson = useMemo(
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

  const toComponent = useMemo(
    () => (toJson ? jsonToComponent(JSON.parse(toJson)) : null),
    [toJson]
  );

  const handleCopyToClipboard = () => {
    if (data) {
      copyToClipboard(data);
      notify("복사 성공");
    }
  };

  const handleCopyToClipboardForJson = () => {
    if (toJson) {
      copyToClipboard(JSON.parse(toJson));
      notify("복사 성공");
    }
  };

  const handleCopyToClipboardForComponent = () => {
    if (toComponent) {
      const codeBlock = toComponent
        .replace(/\\n/g, "") // 개행문자 처리
        .replace(/\\"/g, '"') // 따옴표 처리
        .replace(/^"|"$/g, "") // 문자열 시작/끝의 따옴표 제거
        .trim();
      copyToClipboard(codeBlock, false);
      notify("복사 성공");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={handleCopyToClipboard} style={{ marginBottom: "10px" }}>
        Copy JSON
      </button>
      <pre
        style={{
          background: "#f5f5f5",
          padding: "10px",
          overflow: "auto",
          height: "200px",
        }}
      >
        {data ? JSON.stringify(data, null, 2) : "레이어를 선택하세요"}
      </pre>
      <button
        onClick={handleCopyToClipboardForJson}
        style={{ marginBottom: "10px" }}
      >
        Copy JSON
      </button>
      <pre
        style={{
          marginTop: 16,
          background: "#f5f5f5",
          padding: "10px",
          overflow: "auto",
          height: "200px",
        }}
      >
        {toJson}
      </pre>
      <button
        onClick={handleCopyToClipboardForComponent}
        style={{ marginBottom: "10px" }}
      >
        Copy Component
      </button>
      <pre
        style={{
          marginTop: 16,
          background: "#f5f5f5",
          padding: "10px",
          overflow: "auto",
          height: "200px",
          whiteSpace: "break-spaces",
        }}
      >
        {toComponent}
      </pre>
    </div>
  );
};
