import React, { ChangeEvent, useEffect, useState } from 'react';
import { Badge, Box, Button, Flex, Text, TextArea, TextField } from "@radix-ui/themes"
import { GitHubData, SVGData } from '../type/type';
import { uploadSVGsToGitHub } from '../../utils/githubApi';
import { CalloutBox, CallOutInfo } from './CalloutBox';
import { isEmptyObj } from '../../utils/util';
import { Link1Icon } from '@radix-ui/react-icons';
import { useGitHubData } from './GithubDataProvider';

type MessageKey = 
  'EXTRACT_ICON_SUCCESS' | 
  'EXTRACT_ICON_FAIL' |
  'UPLOAD_SUCCESS' |
  'UPLOAD_FAIL';

const MESSAGE: Record<MessageKey, string> = {
  EXTRACT_ICON_SUCCESS: "Icon extraction successful",
  EXTRACT_ICON_FAIL: "Icon extraction fail",
  UPLOAD_SUCCESS: "Github upload successful",
  UPLOAD_FAIL: "Github upload fail"
};

export const Publish = () => {
  const { githubData, setGithubData: _ } = useGitHubData();

  const [newVersion, setNewVersion] = useState(githubData.packageJson.version ?? "");
  const [commitMsg, setCommitMsg] = useState("");
  const [uploadPath, setUploadPath] = useState("asset");
  const [svgData, setSvgData] = useState<SVGData>();
  const [isLoading, setIsLoading] = useState(false);
  const [calloutInfo, setCalloutInfo] = useState<CallOutInfo | null>(null);
  const [diabled, setDisabled] = useState(true);
  const [prLink, setPrLink] = useState("");

  useEffect(() => {
    window.onmessage = async (event) => {
      const { type, payload } = event.data.pluginMessage

      if (type === "extractIcon") {
        if (isEmptyObj(payload?.svgByName)) {
          return setCalloutInfo({ type: 'Error', message: MESSAGE['EXTRACT_ICON_FAIL'] });
        }

        const itemNum = Object.keys(payload?.svgByName).length;
        setCalloutInfo({ type: 'Success', message: `${itemNum} ${MESSAGE['EXTRACT_ICON_SUCCESS']}` });
        setSvgData(payload?.svgByName);
      }
    }
  }, []);

  useEffect(() => {
    if (
      newVersion &&
      commitMsg &&
      uploadPath &&
      !isEmptyObj(svgData)
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [newVersion, commitMsg, uploadPath, svgData])

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch(name) {
      case 'newVersion':
        setNewVersion(value);
        break;
      case 'uploadPath':
        setUploadPath(value);
        break;
    }
  }

  const handleOnChageTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCommitMsg(value);
  }

  const handleClickExtract = () => {
    parent.postMessage({ pluginMessage: { type: 'extract'} }, '*');
  }

  const handleClickPush = async() => {
    setIsLoading(true);

    const config = {
      commitMsg,
      newVersion,
      uploadPath,
      token: githubData.token,
      owner: githubData.owner,
      repo: githubData.repo,
      packageJson: githubData.packageJson,
      baseBranch: githubData.targetBranch
    };

    if (svgData) {
      try {
        const prUrl = await uploadSVGsToGitHub(svgData, config);

        if (prUrl) {
          setCalloutInfo({ type: 'Success', message: MESSAGE['UPLOAD_SUCCESS'] });
        } else {
          setCalloutInfo({ type: 'Success', message: MESSAGE['UPLOAD_FAIL'] });
        }

        setPrLink(prUrl);
      } catch (e) {
        setCalloutInfo({ type: 'Success', message: MESSAGE['EXTRACT_ICON_SUCCESS'] });
      } finally {
        setIsLoading(false);
      }
    }
  }

  const handleClickPrLink = () => {
    if (prLink) {
      window.open(prLink, '_blank');
    }
  }

  return (
    <Box px="3">
      <Badge color="orange">current version : {githubData.packageJson?.version}</Badge>

      <Flex mt="3" justify="between" align="center">
        <Text size="1" weight="bold">Extract icon from selected areas</Text>
        <Button size="2" onClick={handleClickExtract}>Extract</Button>
      </Flex>

      <Flex mt="2" direction="column" gap="3">
        <Box>
          <Text size="1" weight="bold">set version</Text>
          <TextField.Root mt="1" size="2" placeholder="set version" name='newVersion' value={newVersion} onChange={handleOnChange}/>
        </Box>
        <Box>
          <Text size="1" weight="bold">upload path</Text>
          <TextField.Root mt="1" size="2" placeholder="upload path" name='uploadPath' value={uploadPath} onChange={handleOnChange}/>
        </Box>
        <Box>
          <Text size="1" weight="bold">commit message</Text>
          <TextArea mt="1" placeholder="commit message" name='commitMsg' value={commitMsg} onChange={handleOnChageTextArea}/>
        </Box>
      </Flex>

      <Flex mt="3" justify="end">
        <Button color="indigo" variant="soft" onClick={handleClickPush} loading={isLoading} disabled={diabled}>Push</Button>
      </Flex>

      {calloutInfo &&
        <CalloutBox type={calloutInfo.type} message={calloutInfo.message} />
      }

      {prLink &&
        <Button mt="3" onClick={handleClickPrLink}>
          <Link1Icon /> go Pr Link
        </Button>
      }
    </Box>
  )
}