import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MonacoEditor from "../components/MonacoEditor";
import { useMonacoConfig } from "../hooks/useMonacoConfig";
import { useFile } from "../hooks/useFile";
import { Language, Theme } from "../types/editor.d";
import Star from "../components/common/Star";
import "./Home.css";
// import toast from "react-hot-toast";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { language, theme, setLanguage, setTheme } = useMonacoConfig();
  const { fileId, changed, loading, setFileId, exportToFile, uploadFile, fetchFile } = useFile();
  const { fileId: id } = useParams();

  useEffect(() => {
    if (id) {
      setFileId(id);
      fetchFile(id);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (fileId === "")
      navigate("/");
    else {
      navigate(`/file/${fileId}`);
      // copyLink();
      // toast("Link copied to clipboard", { duration: 3000 })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileId])

  // const copyLink = async () => {
  //   try {
  //     await navigator.clipboard.writeText(`http://localhost:5173/file/${fileId}`);
  //   } catch (error) {
  //     console.error("Error while coping:", error);
  //   }
  // }

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

        <div className="user-actions">
          <button onClick={exportToFile}>Download</button>
          {changed ? <button onClick={uploadFile}>Share</button> : <div className="disable-button">Share</div>}
        </div>
      </div>

      {/* Loading */}
      {loading && <div className="loading">
        <span className="loader"></span>
        <p>Loading...</p>
      </div>}

      {/* <div className="share-container">
        <div className="link">
          <span>{`http://localhost:5173/file/${fileId}`}</span>
        </div>
        <button onClick={copyLink}>Copy</button>
      </div> */}

      {/* Stars */}
      <div id="star1">
        <Star color="#6DA7FC" />
      </div>
      <div id="star2">
        <Star color="#FF7F69" />
      </div>
      <div id="star3">
        <Star color="#A297FF" />
      </div>

      {/* Background */}
      <div className="background-circle"></div>
    </div>
  )
}

export default Home