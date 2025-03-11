import React from "react";
import MonacoEditor from "./components/MonacoEditor";
import "./App.css";

const App: React.FC = () => {
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
    </div>
  )
}

export default App;
