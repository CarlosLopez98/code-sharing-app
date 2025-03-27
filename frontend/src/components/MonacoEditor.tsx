import React, { useRef } from "react";
import * as monaco from "monaco-editor";
import Editor from "@monaco-editor/react";
import { useMonacoConfig } from "../hooks/useMonacoConfig";
import { useFile } from "../hooks/useFile";
import "./MonacoEditor.css";

const MonacoEditor: React.FC = () => {
  const monacoInstance = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const { language, theme } = useMonacoConfig();
  const { ogContent, content, setContent, setChanged } = useFile();

  const editorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    monacoInstance.current = editor;
  };

  const handleChange = (value: string | undefined) => {
    setContent(value || "");
    if (ogContent !== value) {
      setChanged(true);
    } else {
      setChanged(false);
    }
  }

  return <Editor
    className="editor"
    defaultLanguage={language}
    language={language}
    defaultValue={content}
    theme={theme}
    onMount={editorDidMount}
    onChange={handleChange}
  />
}

export default MonacoEditor