import { useState } from "react";
import { Box, Tabs } from "@radix-ui/themes";
import { PublishTabContainer } from "./publish/PublishTabContainer";
import { SettingTabContainer } from "./setting/SettingTabContainer";
import { MappingTableType } from "@moeum/shared/type/component";

type TabType = "setting" | "publish";

export const MainScreen = ({
  layerData,
  mappingTable,
}: {
  layerData: SceneNode[];
  mappingTable: MappingTableType;
}) => {
  const [currentTab, setCurrentTab] = useState<TabType>("setting");

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
        <Tabs.Trigger value="setting">Setting</Tabs.Trigger>
        <Tabs.Trigger value="publish">Publish</Tabs.Trigger>
      </Tabs.List>

      <Box pt="8">
        <Tabs.Content value="setting">
          <PublishTabContainer data={layerData} mappingTable={mappingTable} />
        </Tabs.Content>

        <Tabs.Content value="publish">
          <SettingTabContainer mappingTable={mappingTable} />
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
};
