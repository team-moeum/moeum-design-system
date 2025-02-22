interface PublishTabPageProps {
  nodeToJson: string | null;
  jsonToLayer: string | null;
  layerToComponent: string | null;
  onCopyToClipboard: () => void;
  onCopyToClipboardForJson: () => void;
  onCopyToClipboardForComponent: () => void;
}

export function PublishTabPage({
  nodeToJson,
  jsonToLayer,
  layerToComponent,
  onCopyToClipboard,
  onCopyToClipboardForJson,
  onCopyToClipboardForComponent,
}: PublishTabPageProps) {
  return (
    <div style={{ padding: "20px" }}>
      <button onClick={onCopyToClipboard} style={{ marginBottom: "10px" }}>
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
        {nodeToJson ?? "영역을 선택하세요"}
      </pre>
      <button
        onClick={onCopyToClipboardForJson}
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
        {jsonToLayer ?? "영역을 선택하세요"}
      </pre>
      <button
        onClick={onCopyToClipboardForComponent}
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
        {layerToComponent ?? "영역을 선택하세요"}
      </pre>
    </div>
  );
}
