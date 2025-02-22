import { Component } from "./Component";
import { ComponentException } from "@moeum/shared/exception/ComponentException";
import { CSSProperties } from "react";

describe("Component Entity 도메인 규칙", () => {
  it("Component 이름은 비어 있을 수 없다", () => {
    const baseStyle: CSSProperties = {};
    const baseProps: Record<string, string | boolean> = {};

    expect(() => new Component("", "div", baseStyle, baseProps)).toThrow(
      ComponentException
    );
    expect(() => new Component("", "div", baseStyle, baseProps)).toThrow(
      "Component name is required"
    );
  });

  it("Component 타입은 비어 있을 수 없다", () => {
    const baseStyle: CSSProperties = {};
    const baseProps: Record<string, string | boolean> = {};

    expect(() => new Component("ValidName", "", baseStyle, baseProps)).toThrow(
      ComponentException
    );
    expect(() => new Component("ValidName", "", baseStyle, baseProps)).toThrow(
      "Component type is required"
    );
  });

  it("정상 생성", () => {
    const validStyle: CSSProperties = { color: "red" };
    const validProps: Record<string, string | boolean> = { id: "test" };

    const component = new Component(
      "ValidComponent",
      "div",
      validStyle,
      validProps
    );

    expect(component).toBeTruthy();
  });
});
