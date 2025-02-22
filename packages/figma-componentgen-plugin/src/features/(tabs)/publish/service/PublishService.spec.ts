import { PublishService } from "./PublishService";
import { Component } from "@moeum/shared/entity/Component";
import { Layer } from "@moeum/shared/entity/Layer";

jest.mock("@moeum/shared/entity/Component");
jest.mock("@moeum/shared/entity/Layer");

describe("PublishService 테스트", () => {
  let publishService: PublishService;
  const mockMappingTable = [{ key: "FRAME", value: "div" }];

  beforeEach(() => {
    publishService = new PublishService(mockMappingTable);
  });

  describe("figmaNodeToLayerNode", () => {
    it("빈 노드 배열이 주어졌을 때 빈 JSON 객체를 반환해야 한다", () => {
      // Given
      const emptyNodes: SceneNode[] = [];

      // When
      const result = publishService.figmaNodeToLayerNode(emptyNodes);

      // Then
      expect(result).toBe("{}");
    });

    it("유효한 노드 배열이 주어졌을 때 Layer JSON을 반환해야 한다", () => {
      // Given
      const mockLayer = {
        toJSON: jest.fn().mockReturnValue({ type: "FRAME" }),
      };
      (Layer.fromFigmaNode as jest.Mock).mockReturnValue(mockLayer);
      const nodes = [{} as SceneNode];

      // When
      const result = publishService.figmaNodeToLayerNode(nodes);

      // Then
      expect(result).toBe(JSON.stringify([{ type: "FRAME" }], null, 2));
    });
  });

  describe("layerNodeToComponentNode", () => {
    it("빈 JSON이 주어졌을 때 빈 객체를 반환해야 한다", () => {
      // Given
      const emptyJson = "[]";

      // When
      const result = publishService.layerNodeToComponentNode(emptyJson);

      // Then
      expect(result).toBe("{}");
    });

    it("유효한 LayerNode JSON이 주어졌을 때 ComponentNode JSON을 반환해야 한다", () => {
      // Given
      const mockComponent = {
        toJSON: jest.fn().mockReturnValue({ type: "div" }),
      };
      (Component.fromLayer as jest.Mock).mockReturnValue(mockComponent);
      const validJson = "[{}]";

      // When
      const result = publishService.layerNodeToComponentNode(validJson);

      // Then
      expect(result).toBe(JSON.stringify({ type: "div" }, null, 2));
    });
  });

  describe("componentNodeToString", () => {
    it("빈 JSON이 주어졌을 때 빈 객체를 반환해야 한다", () => {
      // Given
      const emptyJson = "[]";

      // When
      const result = publishService.componentNodeToString(emptyJson);

      // Then
      expect(result).toBe("{}");
    });

    it("유효한 LayerNode JSON이 주어졌을 때 Component 문자열을 반환해야 한다", () => {
      // Given
      const mockComponent = {
        toComponent: jest.fn().mockReturnValue("<div></div>"),
      };
      (Component.fromLayer as jest.Mock).mockReturnValue(mockComponent);
      const validJson = "[{}]";

      // When
      const result = publishService.componentNodeToString(validJson);

      // Then
      expect(result).toBe("<div></div>");
    });
  });
});
