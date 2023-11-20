import { createContext, Dispatch, SetStateAction } from "react";
import { ExtraField } from "../types";

interface IExtraFieldsContext {
  setter: (values: ExtraField[]) => void;
  fields: ExtraField[];
}

// @ts-ignore
export const ExtraFieldsContext = createContext<IExtraFieldsContext>(null);
