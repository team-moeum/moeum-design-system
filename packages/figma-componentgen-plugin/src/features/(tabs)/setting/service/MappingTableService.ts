import { MappingTableType } from "@moeum/shared/type/component";
import { SettingException } from "../exception/SettingException";

export class MappingTableService {
  static addSubValueToMapping(
    currentTable: MappingTableType,
    key: string,
    subKey: string,
    subValue: string
  ): MappingTableType {
    if (!key) {
      throw new SettingException("Key is required");
    }

    const selectedPair = currentTable.find((p) => p.key === key);

    if (!selectedPair) {
      throw new SettingException("Selected mapping not found");
    }

    if (typeof selectedPair.value === "object" && !subKey) {
      throw new SettingException("Sub key is required for object mappings");
    }

    if (!subValue) {
      throw new SettingException("Value is required");
    }

    return currentTable.map((pair) => {
      if (pair.key === key) {
        if (typeof pair.value === "object") {
          return {
            ...pair,
            value: { ...pair.value, [subKey]: subValue },
          };
        }
        return {
          ...pair,
          value: subValue,
        };
      }
      return pair;
    });
  }

  static removeSubValueFromMapping(
    currentTable: MappingTableType,
    key: string,
    subKeyToRemove: string
  ): MappingTableType {
    return currentTable.map((pair) => {
      if (pair.key === key && typeof pair.value === "string") {
        return { ...pair, value: "" };
      }

      if (pair.key === key && typeof pair.value === "object") {
        const newValue = { ...pair.value };
        delete newValue[subKeyToRemove];
        return { ...pair, value: newValue };
      }
      return pair;
    });
  }
}
