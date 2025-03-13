import React, { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";
import { useMonacoConfig } from "../hooks/useMonacoConfig";
import { useFile } from "../hooks/useFile";
import "./MonacoEditor.css";

const MonacoEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const monacoInstance = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const { language, theme } = useMonacoConfig();
  const { ogContent, content, setContent, setChanged } = useFile();

  useEffect(() => {
    // Load the editor
    if (editorRef.current) {
      monacoInstance.current = monaco.editor.create(editorRef.current, {
        value: content,
        language: language,
        theme: theme,
        automaticLayout: true,
        minimap: { enabled: false },
      });

      monacoInstance.current.onDidChangeModelContent(() => {
        if (monacoInstance.current) {
          if (ogContent !== monacoInstance.current.getValue()) {
            setChanged(true);
          } else {
            setChanged(false);
          }
          setContent(monacoInstance.current.getValue());
        }
      });
    }

    return () => {
      monacoInstance.current?.dispose();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (monacoInstance.current) {
      monacoInstance.current.setModel(
        monaco.editor.createModel(
          monacoInstance.current.getValue(),
          language
        )
      );
    }
  }, [language]);

  useEffect(() => {
    if (monacoInstance.current) {
      monaco.editor.setTheme(theme);
    }
  }, [theme]);

  return <div ref={editorRef} className="editor"></div>;
}

export default MonacoEditor