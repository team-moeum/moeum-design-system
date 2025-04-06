import { MappingTableService } from "./MappingTableService";
import { MappingTableType } from "@moeum/shared/type/component";
import { SettingException } from "../exception/SettingException";

describe("MappingTableService 테스트", () => {
  describe("addSubValueToMapping", () => {
    it("문자열 값에 대해 새로운 값을 추가해야 한다", () => {
      // Given
      const currentTable: MappingTableType = [{ key: "FRAME", value: "div" }];

      // When
      const result = MappingTableService.addSubValueToMapping(
        currentTable,
        "FRAME",
        "",
        "section"
      );

      // Then
      expect(result).toEqual([{ key: "FRAME", value: "section" }]);
    });

    it("객체 값에 대해 새로운 하위 값을 추가해야 한다", () => {
      // Given
      const currentTable: MappingTableType = [
        { key: "FRAME", value: { default: "div" } },
      ];

      // When
      const result = MappingTableService.addSubValueToMapping(
        currentTable,
        "FRAME",
        "special",
        "section"
      );

      // Then
      expect(result).toEqual([
        { key: "FRAME", value: { default: "div", special: "section" } },
      ]);
    });

    it("키가 없을 때 예외를 던져야 한다", () => {
      // Given
      const currentTable: MappingTableType = [];

      // When & Then
      expect(() =>
        MappingTableService.addSubValueToMapping(currentTable, "", "", "value")
      ).toThrow(SettingException);
    });

    it("존재하지 않는 키에 대해 예외를 던져야 한다", () => {
      // Given
      const currentTable: MappingTableType = [];

      // When & Then
      expect(() =>
        MappingTableService.addSubValueToMapping(
          currentTable,
          "NONEXISTENT",
          "",
          "value"
        )
      ).toThrow(SettingException);
    });

    it("객체 값에 대해 하위 키가 없을 때 예외를 던져야 한다", () => {
      // Given
      const currentTable: MappingTableType = [
        { key: "FRAME", value: { default: "div" } },
      ];

      // When & Then
      expect(() =>
        MappingTableService.addSubValueToMapping(
          currentTable,
          "FRAME",
          "",
          "value"
        )
      ).toThrow(SettingException);
    });

    it("값이 없을 때 예외를 던져야 한다", () => {
      // Given
      const currentTable: MappingTableType = [{ key: "FRAME", value: "div" }];

      // When & Then
      expect(() =>
        MappingTableService.addSubValueToMapping(currentTable, "FRAME", "", "")
      ).toThrow(SettingException);
    });
  });

  describe("removeSubValueFromMapping", () => {
    it("문자열 값을 빈 문자열로 변경해야 한다", () => {
      // Given
      const currentTable: MappingTableType = [{ key: "FRAME", value: "div" }];

      // When
      const result = MappingTableService.removeSubValueFromMapping(
        currentTable,
        "FRAME",
        ""
      );

      // Then
      expect(result).toEqual([{ key: "FRAME", value: "" }]);
    });

    it("객체 값에서 지정된 하위 키를 제거해야 한다", () => {
      // Given
      const currentTable: MappingTableType = [
        { key: "FRAME", value: { default: "div", special: "section" } },
      ];

      // When
      const result = MappingTableService.removeSubValueFromMapping(
        currentTable,
        "FRAME",
        "special"
      );

      // Then
      expect(result).toEqual([{ key: "FRAME", value: { default: "div" } }]);
    });

    it("존재하지 않는 키에 대해 원본 테이블을 반환해야 한다", () => {
      // Given
      const currentTable: MappingTableType = [{ key: "FRAME", value: "div" }];

      // When
      const result = MappingTableService.removeSubValueFromMapping(
        currentTable,
        "NONEXISTENT",
        ""
      );

      // Then
      expect(result).toEqual(currentTable);
    });
  });
});
