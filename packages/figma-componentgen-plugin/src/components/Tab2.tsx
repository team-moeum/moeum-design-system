import {
  TextField,
  Flex,
  Box,
  Button,
  ScrollArea,
  Select,
} from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { match } from "ts-pattern";
import { notify } from "../utils/notify";
import { MappingTableType } from "../type";
import { setStorage } from "../utils/figmaStorage";

const ObjectValueList = ["INSTANCE"];

export const Tab2 = ({ mappingTable }: { mappingTable: MappingTableType }) => {
  const [keyValuePairs, setKeyValuePairs] =
    useState<MappingTableType>(mappingTable);
  const [selectedKey, setSelectedKey] = useState<string>("");
  const [subKey, setSubKey] = useState("");
  const [subValue, setSubValue] = useState("");

  const saveMappingTable = (data: MappingTableType) => {
    setStorage(data);
  };

  useEffect(() => {
    saveMappingTable(keyValuePairs);
  }, [keyValuePairs]);

  const handleChangeSelectedKey = (value: string) => {
    setSelectedKey(value);
    setSubKey("");
    setSubValue("");
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
        notify("invalid input type!");
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
        notify("invalid input type!");
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

  return (
    <Flex direction="column" gap="3" p="4">
      <Flex gap="3" align="center">
        <Select.Root
          value={selectedKey}
          onValueChange={handleChangeSelectedKey}
        >
          <Select.Trigger placeholder="Select key" />
          <Select.Content>
            {keyValuePairs.map((pair) => (
              <Select.Item key={pair.key} value={pair.key}>
                {pair.key}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
        {match(ObjectValueList.includes(selectedKey))
          .with(true, () => (
            <>
              <TextField.Root
                size="2"
                placeholder="Sub key"
                value={subKey}
                onChange={(e) => setSubKey(e.target.value)}
              />
              <TextField.Root
                size="2"
                placeholder="Value"
                value={subValue}
                onChange={(e) => setSubValue(e.target.value)}
              />
              <Button onClick={addValueToPair}>Add Value</Button>
            </>
          ))
          .otherwise(() => (
            <>
              <TextField.Root
                size="2"
                placeholder="Value"
                value={subValue}
                onChange={(e) => setSubValue(e.target.value)}
              />
              <Button onClick={addValueToPair}>Add Value</Button>
            </>
          ))}
      </Flex>

      <ScrollArea style={{ height: 376 }}>
        <Flex direction="column" gap="2">
          {keyValuePairs.map((pair) =>
            match(JSON.stringify(pair.value))
              .with("{}", () => null)
              .with('""', () => null)
              .otherwise(() => (
                <Flex key={pair.key} direction="column" gap="2">
                  <Box>
                    <strong>{pair.key}:</strong>
                  </Box>
                  {typeof pair.value === "object" ? (
                    Object.entries(pair.value).map(([subKey, value]) => (
                      <Flex
                        key={subKey}
                        justify="between"
                        align="center"
                        pl="4"
                      >
                        <Box>
                          {subKey}: {value}
                        </Box>
                        <Button
                          color="red"
                          variant="soft"
                          onClick={() => removeSubValue(pair.key, subKey)}
                        >
                          Remove
                        </Button>
                      </Flex>
                    ))
                  ) : (
                    <Flex key={subKey} justify="between" align="center" pl="4">
                      <Box>{pair.value}</Box>
                      <Button
                        color="red"
                        variant="soft"
                        onClick={() => removeSubValue(pair.key, "")}
                      >
                        Remove
                      </Button>
                    </Flex>
                  )}
                </Flex>
              ))
          )}
        </Flex>
      </ScrollArea>
    </Flex>
  );
};
