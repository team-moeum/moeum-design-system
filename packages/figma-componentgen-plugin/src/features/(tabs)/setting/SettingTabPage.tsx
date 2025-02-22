import {
  TextField,
  Flex,
  Box,
  Button,
  ScrollArea,
  Select,
} from "@radix-ui/themes";
import { match } from "ts-pattern";
import { MappingTableType } from "@moeum/shared/type/component";

interface SettingTabPageProps {
  keyValuePairs: MappingTableType;
  selectedKey: string;
  subKey: string;
  subValue: string;
  onChangeSelectedKey: (value: string) => void;
  onChangeSubKey: (value: string) => void;
  onChangeSubValue: (value: string) => void;
  addValueToPair: () => void;
  removeSubValue: (key: string, subKey: string) => void;
}

export const ObjectValueList = ["INSTANCE"];

export function SettingTabPage({
  keyValuePairs,
  selectedKey,
  subKey,
  subValue,
  onChangeSelectedKey,
  onChangeSubKey,
  onChangeSubValue,
  addValueToPair,
  removeSubValue,
}: SettingTabPageProps) {
  return (
    <Flex direction="column" gap="3" p="4">
      <Flex gap="3" align="center">
        <Select.Root value={selectedKey} onValueChange={onChangeSelectedKey}>
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
                onChange={(e) => onChangeSubKey(e.target.value)}
              />
              <TextField.Root
                size="2"
                placeholder="Value"
                value={subValue}
                onChange={(e) => onChangeSubValue(e.target.value)}
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
                onChange={(e) => onChangeSubValue(e.target.value)}
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
}
