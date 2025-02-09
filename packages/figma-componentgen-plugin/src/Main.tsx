import { useState, useEffect } from "react";
import { notify } from "./utils/notify";
import { copyToClipboard } from "./utils/copyToClipboard";

export const Main = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    window.onmessage = (event) => {
      setData(event.data.pluginMessage);
    };
  }, []);

  const handleCopyToClipboard = () => {
    if (data) {
      copyToClipboard(data);
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
      <pre
        style={{
          marginTop: 16,
          background: "#f5f5f5",
          padding: "10px",
          overflow: "auto",
          height: "200px",
        }}
      >{`
        <Button></Button>
      `}</pre>
    </div>
  );
};
