import { useContext } from "react"
import { FileContext } from "../context/contexts"
import { FileContextType } from "../types/file.d";

export const useFile = (): FileContextType => {
  const context = useContext(FileContext);

  if (!context) {
    throw new Error("useFile must be use inside of FileProvider");
  }

  return context;
}