import React from "react";
import MonacoEditor from "./components/MonacoEditor";
import { useMonacoConfig } from "./hooks/useMonacoConfig";
import { Language, Theme } from "./types/editor.d";
import "./App.css";

const App: React.FC = () => {
  const { language, theme, setLanguage, setTheme } = useMonacoConfig();

  return (
    <div className="container">
      <div className="logo-container">
        <div className="logo"></div>
        <p className="text">NoteCode</p>
      </div>

      <div className="subtitle">
        <h2>Create & Share</h2>
        <h2>Your Code easily</h2>
      </div>

      <MonacoEditor />

      <div className="footer">
        <div className="editor-actions">
          <select name="language" id="language" value={language} onChange={(e) => setLanguage(e.target.value as Language)}>
            {Object.values(Language).map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>

          <select name="theme" id="theme" value={theme} onChange={(e) => setTheme(e.target.value as Theme)}>
            {Object.values(Theme).map((theme) => (
              <option key={theme} value={theme}>{theme}</option>
            ))}
          </select>
        </div>

        <button>Share</button>
      </div>
    </div>
  )
}

export default App;
