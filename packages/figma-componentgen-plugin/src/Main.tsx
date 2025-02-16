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

const defaultKeyValues: MappingTableType = [
  { key: "DEFAULT", value: "" },
  { key: "SLICE", value: "" },
  { key: "FRAME", value: "" },
  { key: "GROUP", value: "" },
  { key: "COMPONENT_SET", value: "" },
  { key: "COMPONENT", value: "" },
  { key: "INSTANCE", value: {} },
  { key: "BOOLEAN_OPERATION", value: "" },
  { key: "VECTOR", value: "" },
  { key: "STAR", value: "" },
  { key: "LINE", value: "" },
  { key: "ELLIPSE", value: "" },
  { key: "RECTANGLE", value: "" },
  { key: "TEXT", value: "" },
  { key: "STICKY", value: "" },
  { key: "CONNECTOR", value: "" },
  { key: "SHAPE_WITH_TEXT", value: "" },
  { key: "CODE_BLOCK", value: "" },
  { key: "STAMP", value: "" },
  { key: "WIDGET", value: "" },
  { key: "EMBED", value: "" },
  { key: "LINK_UNFURL", value: "" },
  { key: "MEDIA", value: "" },
  { key: "SECTION", value: "" },
  { key: "HIGHLIGHT", value: "" },
  { key: "WASHI_TAPE", value: "" },
  { key: "TABLE", value: "" },
];

export const Main = () => {
  const [mappingTable, setMappingTable] =
    useState<MappingTableType>(defaultKeyValues);
  const [layerData, setLayerData] = useState();
  const [currentTab, setCurrentTab] = useState<TabType>("info");

  const handleTabChange = (value: TabType) => {
    setCurrentTab(value);
  };

  useEffect(() => {
    window.onmessage = (event) => {
      const message = event.data.pluginMessage;
      console.log(message);
      if (message.type === "getMappingTable") {
        const data = message.payload || defaultKeyValues;
        console.log(data);
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
