import "./style/global.css";
import { useEffect, useState } from "react";
import { Tab1 } from "./components/Tab1";
import { Box, Tabs, Theme } from "@radix-ui/themes";
import { Tab2 } from "./components/Tab2";
import { MappingTableType } from "./type";

const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

type TabType = "info" | "setting";

export const Main = () => {
  const [mappingTable, setMappingTable] = useState<MappingTableType>([]);
  const [layerData, setLayerData] = useState();
  const [currentTab, setCurrentTab] = useState<TabType>("info");

  const handleTabChange = (value: TabType) => {
    setCurrentTab(value);
  };

  useEffect(() => {
    window.onmessage = (event) => {
      const message = event.data.pluginMessage;
      if (message.type === "getMappingTable") {
        const data = message.payload;
        setMappingTable(data);
      }

      if (message.type === "selectionchange") {
        setLayerData(message.payload);
      }
    };
  }, []);

  return (
    <Theme appearance={"light"}>
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
            <Tab1 data={layerData} mappingTable={mappingTable} />
          </Tabs.Content>

          <Tabs.Content value="setting">
            <Tab2 mappingTable={mappingTable} />
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Theme>
  );
};
