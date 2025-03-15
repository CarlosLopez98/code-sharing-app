import { useState } from "react"
import { FileContext } from "./contexts";
import { Language, languageExtensions } from "../types/editor.d";
import { extensionLanguages } from "../types/file.d";
import { useMonacoConfig } from "../hooks/useMonacoConfig";

import { FileService } from "../services/FileService";

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
  const [fileId, setFileId] = useState<string>("");
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

    await FileService.uploadFile(file, new AbortController())
      .then(response => response.json())
      .then(data => {
        if (data.id)
          setFileId(data.id);
        setChanged(false);
      })
      .catch(error => console.error(error));
  }

  const fetchFile = async (fileId: string) => {
    try {
      const response = await FileService.getFile(fileId, new AbortController())

      if (!response.ok) {
        throw new Error("Error while gettting the file");
      }

      const blob = await response.blob();
      const content = await blob.text();

      const contentDisposition = response.headers.get("Content-Disposition");
      let fileName = `file_${fileId}`;
      let extension = "txt"

      if (contentDisposition) {
        const match = contentDisposition.match(/filename="(.+?)"/);
        if (match && match[1]) {
          fileName = match[1];
          extension = fileName.split(".").pop() || "txt";
        }
      }

      setOgContent(content);
      setContent(content);
      setLanguage(extensionLanguages[extension] as Language);
    } catch (error) {
      console.error("Error in fetchFile:", error);
    }
  }

  return (
    <FileContext.Provider value={{
      fileId,
      ogContent,
      content,
      changed,
      loading,
      setFileId,
      setOgContent,
      setContent,
      setChanged,
      exportToFile,
      uploadFile,
      fetchFile
    }}>
      {children}
    </FileContext.Provider>
  )
}

export default FileProvider;