import React, { useEffect, useRef } from "react";
import * as monaco from "monaco-editor";
import "./MonacoEditor.css";

const MonacoEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const monacoInstance = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    // Load the editor
    if (editorRef.current) {
      monacoInstance.current = monaco.editor.create(editorRef.current, {
        value: `<html>
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
</html>`,
        language: "html",
        theme: "vs-light",
        automaticLayout: true,
      });
    }

    return () => {
      monacoInstance.current?.dispose();
    }
  }, []);

  return <div ref={editorRef} className="editor"></div>;
}

export default MonacoEditor