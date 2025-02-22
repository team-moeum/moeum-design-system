interface PublishTabPageProps {
  layerNode: string | null;
  componentNode: string | null;
  componentString: string;
  onCopyToClipboardForLayerNode: () => void;
  onCopyToClipboardForComponentNode: () => void;
  onCopyToClipboardForComponent: () => void;
}

export function PublishTabPage({
  layerNode,
  componentNode,
  componentString,
  onCopyToClipboardForLayerNode,
  onCopyToClipboardForComponentNode,
  onCopyToClipboardForComponent,
}: PublishTabPageProps) {
  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={onCopyToClipboardForLayerNode}
        style={{ marginBottom: "10px" }}
      >
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
        {layerNode ?? "영역을 선택하세요"}
      </pre>
      <button
        onClick={onCopyToClipboardForComponentNode}
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
        {componentNode ?? "영역을 선택하세요"}
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
        {componentString ?? "영역을 선택하세요"}
      </pre>
    </div>
  );
}
