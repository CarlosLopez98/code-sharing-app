import { useState } from "react"
import { FileContext } from "./contexts";
import { Language, languageExtensions } from "../types/editor.d";
import { extensionLanguages } from "../types/file.d";
import { useMonacoConfig } from "../hooks/useMonacoConfig";

import { uploadFile as uploadFileService, fetchFile as fetchFileService } from "../services/FileService";

const initialText = `<html>
  <head>
    <title>HTML Sample</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
      h1 {
        color: #cca3a3;
      }
    </style>
    <script type="text/javascript">
      alert("I am a sample... visit devChallengs.io for more projects");
    </script>
  </head>
  <body>
    <h1>Heading No.1</h1>
    <input disabled type="button" value="Click me" />
  </body>
</html>`;

const FileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ogContent, setOgContent] = useState<string>(initialText);
  const [content, setContent] = useState<string>(initialText);
  const [changed, setChanged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { language, setLanguage } = useMonacoConfig();

  const exportToFile = () => {
    const code = content;
    const extension = languageExtensions[language] || "txt";
    const fileName = `code.${extension}`;

    // Create the blob
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    // Create the download link
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  const uploadFile = async () => {
    const code = content;
    const extension = languageExtensions[language] || "txt";
    const fileName = `code.${extension}`;

    const blob = new Blob([code], { type: "text/plain" });
    const file = new File([blob], fileName, { type: "text/plain" });

    await uploadFileService(file);
  }

  const fetchFile = async (fileId: string) => {
    setLoading(true);
    fetchFileService(fileId)
      .then((fileData) => {
        if (fileData) {
          setOgContent(fileData.content);
          setContent(fileData.content);
          setLanguage(extensionLanguages[fileData.ext] as Language);
        }
      })
      .catch(error => { console.error("Error in FileProvider:fetchFile.", error) })
      .finally(() => setLoading(false));
  }

  return (
    <FileContext.Provider value={{ ogContent, content, changed, loading, setOgContent, setContent, setChanged, exportToFile, uploadFile, fetchFile }}>
      {children}
    </FileContext.Provider>
  )
}

export default FileProvider;