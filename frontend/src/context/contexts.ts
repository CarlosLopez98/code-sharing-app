import { createContext } from "react";
import { MonacoContextType } from "../types/editor";

export const MonacoContext = createContext<MonacoContextType | undefined>(undefined);