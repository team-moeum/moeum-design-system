export interface GitHubData {
  url: string,
  repo: string,
  owner: string,
  token: string,
  targetBranch: string,
  packageJson: {
    name?: string;
    version?: string;
    [key: string]: any;
  }
}

export interface SVGData {
  [key: string]: {
    svg: string;
    id: string;
  };
}