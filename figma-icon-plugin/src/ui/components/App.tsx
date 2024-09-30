import React, { useEffect, useState } from 'react'
import { Box, Tabs } from '@radix-ui/themes';
import { Setting } from './Setting';
import { Publish } from './Publish';
import { useGitHubData } from './GithubDataProvider';

export const Main = () => {
  const { githubData, setGithubData } = useGitHubData();
  const [currentTab, setCurrentTab] = useState("setting");

  useEffect(() => {
    window.onmessage = async (event) => {
      const { type, payload } = event.data.pluginMessage

      if (type === "githubData") {
        setGithubData(payload);
      }
    }
  }, []);

  useEffect(() => {
    if (githubData?.repo) {
      setCurrentTab("publish");
    }
  }, [githubData])

  const handleTabChange = (value: string) => {
    setCurrentTab(value);
  };

  return (
    <Tabs.Root defaultValue="setting" onValueChange={handleTabChange} value={currentTab}>
      <Tabs.List>
        <Tabs.Trigger value="setting">Setting</Tabs.Trigger>
        <Tabs.Trigger value="publish">Publish</Tabs.Trigger>
      </Tabs.List>

      <Box pt="3">
        <Tabs.Content value="setting">
          <Setting />
        </Tabs.Content>

        <Tabs.Content value="publish">
          <Publish />
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  )
};