import { Layer } from "./Layer";
import { LayerException } from "@moeum/shared/exception/LayerException";
import { CSSProperties } from "react";

describe("Layer Entity 도메인 규칙", () => {
  it("Layer 이름은 비어 있을 수 없다", () => {
    const baseStyle: CSSProperties = {
      fontSize: "16px",
    };

    expect(() => new Layer("", "TEXT", baseStyle)).toThrow(LayerException);
  });

  it("TEXT 타입의 Layer는 반드시 폰트 크기를 가져야 한다", () => {
    const emptyStyle: CSSProperties = {}; // 폰트 크기 없음

    expect(() => new Layer("TestLayer", "TEXT", emptyStyle)).toThrow(
      LayerException
    );
  });

  it("정상 생성", () => {
    const validStyle: CSSProperties = {
      fontSize: "16px",
    };

    const layer = new Layer("ValidLayer", "TEXT", validStyle);

    expect(layer).toBeTruthy();
  });
});
