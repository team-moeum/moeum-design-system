import { Octokit } from "octokit";
import { SVGData } from "../ui/type/type";

export function parseGithubURL(url: string) {
  const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
  if (!match) {
    return null;
  }

  const [, owner, repo] = match;

  return {owner, repo}
}

export async function getGithubInfo(url: string, token: string, path: string, branch: string) {
  const octokit = new Octokit({ auth: token });

  const parseData = parseGithubURL(url);

  if (!parseData) return false;

  try {
    const info = await octokit.rest.repos.get({ 
      owner: parseData.owner, 
      repo: parseData.repo 
    });

    const { data } = await octokit.rest.repos.getContent({ 
      owner: parseData.owner, 
      repo: parseData.repo,
      ref: branch,
      path: path,
    });

    if (data) {
      const content = JSON.parse(atob(data.content))

      if (!content?.version) {
        throw new Error('Cannot found version');  
      }

      return {...info, packageJson: content};
    } else {
      throw new Error('Content not found in the response');
    }

  } catch (error) {
    console.error("Error validating GitHub Info:", error);
    return null;
  }
}

export async function uploadSVGsToGitHub(svgData: SVGData, config) {
  const { 
    token,
    owner,
    repo,
    baseBranch,
    commitMsg,
    newVersion,
    packageJson,
    uploadPath
  } = config;

  const newBranch = `figma-icon-${(new Date()).getTime()}`;

  const octokit = new Octokit({ auth: token });

  const { data: refData } = await octokit.rest.git.getRef({
    owner,
    repo,
    ref: `heads/${baseBranch}`,
  });
  const baseSha = refData.object.sha;

  await octokit.rest.git.createRef({
    owner,
    repo,
    ref: `refs/heads/${newBranch}`,
    sha: baseSha,
  });

  const tree = [];

  // Add SVG files
  for (const [name, data] of Object.entries(svgData)) {
    tree.push({
      path: `${uploadPath}/${name}.svg`,
      mode: '100644',
      type: 'blob',
      content: data.svg
    });
  }

  // Update package.json
  const updatedPackageJson = { ...packageJson, version: newVersion };
  tree.push({
    path: 'package.json',
    mode: '100644',
    type: 'blob',
    content: JSON.stringify(updatedPackageJson, null, 2)
  });

  const { data: newTree } = await octokit.rest.git.createTree({
    owner,
    repo,
    base_tree: baseSha,
    tree,
  });

  const { data: newCommit } = await octokit.rest.git.createCommit({
    owner,
    repo,
    message: commitMsg,
    tree: newTree.sha,
    parents: [baseSha],
  });

  await octokit.rest.git.updateRef({
    owner,
    repo,
    ref: `heads/${newBranch}`,
    sha: newCommit.sha,
  });

  const { data: pullRequest } = await octokit.rest.pulls.create({
    owner,
    repo,
    title: 'Add new SVG icons',
    head: newBranch,
    base: baseBranch,
    body: commitMsg,
  });

  return pullRequest.html_url;
}