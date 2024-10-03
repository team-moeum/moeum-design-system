import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box, Button, Flex, Text, TextField } from "@radix-ui/themes"
import { getGithubInfo, parseGithubURL } from '../../utils/githubApi';
import { CalloutBox, CallOutInfo } from './CalloutBox';
import { useGitHubData } from './GithubDataProvider';

type MessageKey = 
  'SUCCESS' |
  'FAIL' |
  'ERROR';

const MESSAGE: Record<MessageKey, string> = {
  SUCCESS: "Successfully updated your info",
  FAIL: "Failed to validate GitHub info",
  ERROR: "Error validating GitHub URL"
};

export const Setting = () => {
  const { githubData, setGithubData } = useGitHubData();

  const [url, setUrl] = useState("");
  const [token, setToken] = useState("");
  const [targetPath, setTargetPath] = useState("packages/figma-icon-plugin/package.json");
  const [targetBranch, setTargetBranch] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [calloutInfo, setCalloutInfo] = useState<CallOutInfo | null>(null);
  const [diabled, setDisabled] = useState(true);

  useEffect(() => {
    setUrl(githubData?.url ?? "");
    setToken(githubData?.token ?? "");
    setTargetBranch(githubData?.targetBranch ?? "");
  }, [githubData])

  useEffect(() => {
    if (
      url &&
      token &&
      targetPath &&
      targetBranch
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [url, token, targetBranch, targetPath])

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch(name) {
      case 'url':
        setUrl(value);
        break;
      case 'token':
        setToken(value);
        break;
      case 'targetPath':
        setTargetPath(value);
        break;
      case 'targetBranch':
        setTargetBranch(value);
        break;
    }
  }

  const handleClickUpdate = async () => {
    setIsValidating(true);

    try {
      const result = await getGithubInfo(url, token, targetPath, targetBranch);

      if (result) {
        setCalloutInfo({ type: 'Success', message: MESSAGE['SUCCESS'] });
        
        const parseData = parseGithubURL(url);
        
        const githubData = {
          url, 
          token,
          targetPath,
          targetBranch,
          repo: parseData.repo,
          owner: parseData.owner,
          packageJson: result.packageJson
        };

        setGithubData(githubData);

        parent.postMessage({ 
          pluginMessage: { 
            type: 'setGithubData',
            payload: githubData
          } 
        }, '*');

      } else {
        setCalloutInfo({ type: 'Error', message: MESSAGE['FAIL'] });
      }
    } catch (error) {
      setCalloutInfo({ type: 'Error', message: MESSAGE['ERROR'] });
    } finally {
      setIsValidating(false);
    }
  }

  return (
    <Box px="3">
      <Flex direction="column" gap="3">
        <Box>
          <Text size="1" weight="bold">github url</Text>
          <TextField.Root mt="1" size="2" placeholder="github url" name='url' value={url} onChange={handleOnChange}/>
        </Box>
        <Box>
          <Text size="1" weight="bold">github token</Text>
          <TextField.Root mt="1" size="2" placeholder="github token" name='token' value={token} onChange={handleOnChange}/>
        </Box>
        <Box>
          <Text size="1" weight="bold">target path</Text>
          <TextField.Root mt="1" size="2" placeholder="target package.json path" name='targetPath' value={targetPath} onChange={handleOnChange}/>
        </Box>
        <Box>
          <Text size="1" weight="bold">target branch</Text>
          <TextField.Root mt="1" size="2" placeholder="dev" name='targetBranch' value={targetBranch} onChange={handleOnChange}/>
        </Box>
      </Flex>

      <Flex mt="3" justify="end">
        <Button color="indigo" variant="soft" loading={isValidating} onClick={handleClickUpdate} disabled={diabled}>Update</Button>
      </Flex>

      {calloutInfo &&
        <CalloutBox type={calloutInfo.type} message={calloutInfo.message} />
      }
    </Box>
  )
}