import { useState } from "react";
import { Box, Tabs } from "@radix-ui/themes";
import { PublishTabContainer } from "./publish/PublishTabContainer";
import { SettingTabContainer } from "./setting/SettingTabContainer";
import { MappingTableType } from "@moeum/shared/type/component";

type TabType = "info" | "setting";

export const MainScreen = ({
  layerData,
  mappingTable,
}: {
  layerData: SceneNode[];
  mappingTable: MappingTableType;
}) => {
  const [currentTab, setCurrentTab] = useState<TabType>("info");

  const handleTabChange = (value: TabType) => {
    setCurrentTab(value);
  };

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
