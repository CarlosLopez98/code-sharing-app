import { createContext } from "react";
import { MonacoContextType } from "../types/editor";
import { FileContextType } from "../types/file.d";

export const MonacoContext = createContext<MonacoContextType | undefined>(undefined);
export const FileContext = createContext<FileContextType | undefined>(undefined);