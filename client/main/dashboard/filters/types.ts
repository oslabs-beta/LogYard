export interface SetFilterName {
  (value: string): void;
}

export interface SetFilterText {
  (value: string): void;
}

export type SetFilterErrors = (errors: string[]) => void;

export interface Filter {
  [key: string]: string;
}

export interface SaveLoadProps {
  setFilterText: (value: string) => void;
  filterText: string;
}

export interface FilterMetaData {
  errors: string[];
  success: boolean;
}

export interface FilterTextProps {
  filterText: string;
  setFilterText: (value: string) => void;
  setFilterErrors: SetFilterErrors;
  setFilterName: (value: string) => void;
}
