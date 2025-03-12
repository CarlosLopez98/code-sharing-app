import React, { useState } from "react";
import { MonacoContext } from "./contexts";
import { Language, Theme } from "../types/editor.d";

const MonacoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(Language.Html);
  const [theme, setTheme] = useState<Theme>(Theme.Dark);

  return (
    <MonacoContext.Provider value={{ language, theme, setLanguage, setTheme }}>
      {children}
    </MonacoContext.Provider>
  )
}

export default MonacoProvider