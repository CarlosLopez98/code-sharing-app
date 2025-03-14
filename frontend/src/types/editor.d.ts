export interface MonacoContextType {
  language: Language;
  theme: Theme;
  setLanguage: (lang: Language) => void;
  setTheme: (theme: Theme) => void;
}

export const languageExtensions: Record<string, string> = {
  javascript: "js",
  typescript: "ts",
  python: "py",
  java: "java",
  csharp: "cs",
  html: "html",
  text: "txt",
}

export enum Language {
  JavaScript = "javascript",
  TypeScript = "typescript",
  Python = "python",
  Java = "java",
  CSharp = "csharp",
  Html = "html",
  Text = "text"
}

export enum Theme {
  Dark = "vs-dark",
  Light = "vs-light",
  HighContrast = "hc-black",
}