import { useState, useEffect } from "react";

export const Main = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    window.onmessage = (event) => {
      setData(event.data.pluginMessage);
    };
  }, []);

  const copyToClipboard = () => {
    if (data) {
      navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={copyToClipboard} style={{ marginBottom: "10px" }}>
        Copy JSON
      </button>
      <pre
        style={{
          background: "#f5f5f5",
          padding: "10px",
          overflow: "auto",
          height: "400px",
        }}
      >
        {data ? JSON.stringify(data, null, 2) : "레이어를 선택하세요"}
      </pre>
    </div>
  );
};
