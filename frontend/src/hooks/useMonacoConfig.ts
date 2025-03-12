import { useContext } from "react"
import { MonacoContext } from "../context/contexts"
import { MonacoContextType } from "../types/editor";

export const useMonacoConfig = (): MonacoContextType => {
  const context = useContext(MonacoContext);

  if (!context) {
    throw new Error("useMonacoConfig must be use inside of MonacoProvider");
  }

  return context;
}