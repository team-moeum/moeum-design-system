import { useEffect, useState } from "react";
import { MappingTableType } from "@moeum/shared/type/component";
import { SettingTabPage, ObjectValueList } from "./SettingTabPage";
import { FigmaService } from "@moeum/shared/service/FigmaService";

export const SettingTabContainer = ({
  mappingTable,
}: {
  mappingTable: MappingTableType;
}) => {
  const [keyValuePairs, setKeyValuePairs] =
    useState<MappingTableType>(mappingTable);
  const [selectedKey, setSelectedKey] = useState<string>("");
  const [subKey, setSubKey] = useState("");
  const [subValue, setSubValue] = useState("");

  const handleChangeSelectedKey = (value: string) => {
    setSelectedKey(value);
    setSubKey("");
    setSubValue("");
  };

  const saveMappingTable = (data: MappingTableType) => {
    FigmaService.setStorage("mappingTable", data);
  };

  const addValueToPair = () => {
    if (ObjectValueList.includes(selectedKey)) {
      if (selectedKey && subKey && subValue) {
        setKeyValuePairs((pairs) =>
          pairs.map((pair) => {
            if (pair.key === selectedKey) {
              if (typeof pair.value === "object") {
                const newValue = { ...pair.value, [subKey]: subValue };
                return { ...pair, value: newValue };
              }
            }
            return pair;
          })
        );
      } else {
        FigmaService.notify("invalid input type!");
      }
    } else {
      if (selectedKey && subValue) {
        setKeyValuePairs((pairs) =>
          pairs.map((pair) => {
            if (pair.key === selectedKey) {
              if (typeof pair.value === "string") {
                return { ...pair, value: subValue };
              }
            }
            return pair;
          })
        );
      } else {
        FigmaService.notify("invalid input type!");
      }
    }

    setSubKey("");
    setSubValue("");
  };

  const removeSubValue = (key: string, subKeyToRemove: string) => {
    setKeyValuePairs((pairs) =>
      pairs.map((pair) => {
        if (pair.key === key && typeof pair.value === "string") {
          return { ...pair, value: "" };
        }

        if (pair.key === key && typeof pair.value === "object") {
          const newValue = { ...pair.value };
          delete newValue[subKeyToRemove];
          return { ...pair, value: newValue };
        }
        return pair;
      })
    );
  };

  useEffect(() => {
    saveMappingTable(keyValuePairs);
  }, [keyValuePairs]);

  return (
    <SettingTabPage
      keyValuePairs={keyValuePairs}
      selectedKey={selectedKey}
      subKey={subKey}
      subValue={subValue}
      onChangeSelectedKey={handleChangeSelectedKey}
      onChangeSubKey={setSubKey}
      onChangeSubValue={setSubValue}
      addValueToPair={addValueToPair}
      removeSubValue={removeSubValue}
    />
  );
};
