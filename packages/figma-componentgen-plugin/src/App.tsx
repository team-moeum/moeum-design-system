import { useEffect, useState } from "react";
import { Box, Tabs } from "@radix-ui/themes";
import { MappingTableType } from "@moeum/shared/type/component";
import { PublishTabContainer } from "@moeum/features/(tabs)/publish/PublishTabContainer";
import { SettingTabContainer } from "@moeum/features/(tabs)/setting/SettingTabContainer";
import "@moeum/common/style/global.css";

type TabType = "info" | "setting";

export const App = () => {
  const [mappingTable, setMappingTable] = useState<MappingTableType>([]);
  const [layerData, setLayerData] = useState();
  const [currentTab, setCurrentTab] = useState<TabType>("info");

  const handleTabChange = (value: TabType) => {
    setCurrentTab(value);
  };

  useEffect(() => {
    window.onmessage = (event) => {
      const message = event.data.pluginMessage;

      switch (message.type) {
        case "getMappingTable":
          setMappingTable(message.payload);
          break;
        case "selectionchange":
          setLayerData(message.payload);
          break;
      }
    };
  }, []);

  return (
    <Tabs.Root
      defaultValue="setting"
      onValueChange={handleTabChange}
      value={currentTab}
    >
      <Tabs.List
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: 1,
          backgroundColor: "#FFF",
        }}
      >
        <Tabs.Trigger value="info">Setting</Tabs.Trigger>
        <Tabs.Trigger value="setting">Publish</Tabs.Trigger>
      </Tabs.List>

      <Box pt="8">
        <Tabs.Content value="info">
          <PublishTabContainer data={layerData} mappingTable={mappingTable} />
        </Tabs.Content>

        <Tabs.Content value="setting">
          <SettingTabContainer mappingTable={mappingTable} />
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
};
