import { Language } from "./editor.d";
export interface FileContextType {
  ogContent: string;
  content: string;
  changed: boolean;
  loading: boolean;
  setOgContent: (content: string) => void;
  setContent: (content: string) => void;
  setChanged: (value: boolean) => void;
  exportToFile: () => void;
  uploadFile: () => void;
  fetchFile: (fileId: string) => void;
}

export interface FileResponse {
  content: string;
  ext: string;
}

export const extensionLanguages: Record<string, string> = {
  js: Language.JavaScript,
  ts: Language.TypeScript,
  py: Language.Python,
  java: Language.Java,
  cs: Language.CSharp,
  html: Language.Html,
  txt: Language.Text,
}