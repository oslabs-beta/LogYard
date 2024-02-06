import { ReactNode } from "react";
import { LogItem } from "../../../state/reducers/logsReducer";

export interface TextEntryProps {
  input: string | number | (ReactNode)[];
}

export interface InspectEntryProps {
  groupKey: number | string;
}

export interface ContextEntryProps {
  contexts: number | string;
}

export interface InspectLogEntryProps {
  log: LogItem;
}

export interface DeleteEntryProps {
  input: string;
}