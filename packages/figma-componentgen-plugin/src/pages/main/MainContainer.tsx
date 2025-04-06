import { useEffect, useState } from "react";
import { MappingTableType } from "@moeum/shared/type/component";
import { defaultKeyValues } from "@moeum/shared/constants";
import { MainScreen } from "./component/MainScreen";

export const MainContainer = () => {
  const [mappingTable, setMappingTable] =
    useState<MappingTableType>(defaultKeyValues);
  const [layerData, setLayerData] = useState<SceneNode[]>([]);

  useEffect(() => {
    window.onmessage = (event) => {
      const message = event.data.pluginMessage;

      switch (message.type) {
        case "getMappingTable":
          setMappingTable(message.payload);
          break;
        case "selectionchange":
          setLayerData(message.payload || []);
          break;
      }
    };
  }, []);
  return <MainScreen layerData={layerData} mappingTable={mappingTable} />;
};
