import React, { createContext, useContext, useState } from 'react'
import { GitHubData } from "../type/type";
import { ReactNode } from "react";

interface GitHubDataContextType {
  githubData: GitHubData | undefined;
  setGithubData: React.Dispatch<React.SetStateAction<GitHubData | undefined>>;
}

const GitHubDataContext = createContext<GitHubDataContextType | undefined>(undefined);

export const GitHubDataProvider = ({ children }: {children: ReactNode}) => {
  const [githubData, setGithubData] = useState<GitHubData | undefined>();

  return (
    <GitHubDataContext.Provider value={{ githubData, setGithubData }}>
      {children}
    </GitHubDataContext.Provider>
  );
};

export const useGitHubData = () => {
  const context = useContext(GitHubDataContext);
  
  if (context === undefined) {
    throw new Error('useGitHubData must be used within a GitHubDataProvider');
  }
  return context;
};