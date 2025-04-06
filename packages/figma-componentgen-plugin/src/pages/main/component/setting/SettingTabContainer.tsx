import { useEffect, useState } from "react";
import { MappingTableType } from "@moeum/shared/type/component";
import { SettingTabScreen, ObjectValueList } from "./SettingTabScreen";
import { FigmaService } from "@moeum/shared/service/FigmaService";
import { MappingTableService } from "./service/MappingTableService";
import { SettingException } from "./exception/SettingException";

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
    try {
      if (ObjectValueList.includes(selectedKey)) {
        const updatedTable = MappingTableService.addSubValueToMapping(
          keyValuePairs,
          selectedKey,
          subKey,
          subValue
        );
        setKeyValuePairs(updatedTable);
        FigmaService.notify("정상 반영되었습니다.");
      } else {
        const updatedTable = MappingTableService.addSubValueToMapping(
          keyValuePairs,
          selectedKey,
          "",
          subValue
        );
        setKeyValuePairs(updatedTable);
        FigmaService.notify("정상 반영되었습니다.");
      }
      // reset
      setSubKey("");
      setSubValue("");
    } catch (error) {
      if (error instanceof SettingException) {
        FigmaService.notify(error.message);
      } else {
        FigmaService.notify("An unexpected error occurred");
      }
    }
  };

  const removeSubValue = (key: string, subKeyToRemove: string) => {
    try {
      const updatedTable = MappingTableService.removeSubValueFromMapping(
        keyValuePairs,
        key,
        subKeyToRemove
      );

      setKeyValuePairs(updatedTable);
    } catch (error) {
      FigmaService.notify(error.message);
    }
  };

  useEffect(() => {
    saveMappingTable(keyValuePairs);
  }, [keyValuePairs]);

  return (
    <SettingTabScreen
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
