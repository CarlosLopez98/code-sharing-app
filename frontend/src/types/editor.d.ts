export interface MonacoContextType {
  language: Language;
  theme: Theme;
  setLanguage: (lang: Language) => void;
  setTheme: (theme: Theme) => void;
}

export enum Language {
  JavaScript = "javascript",
  TypeScript = "typescript",
  Python = "python",
  Java = "java",
  CSharp = "csharp",
  Html = "html",
}

export enum Theme {
  Dark = "vs-dark",
  Light = "vs-light",
  HighContrast = "hc-black",
}