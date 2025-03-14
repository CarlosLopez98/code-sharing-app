export interface FileContextType {
  ogContent: string;
  content: string;
  changed: boolean;
  setOgContent: (content: string) => void;
  setContent: (content: string) => void;
  setChanged: (value: boolean) => void;
  exportToFile: () => void;
  uploadFile: () => void;
  fetchFile: () => void;
}