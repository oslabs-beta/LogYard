import { LogItem } from '../../state/reducers/logsReducer';

export interface BarGraphProps {
  logData: LogItem;
  className: string;
}

export interface CheckBoxProps {
  displayLine: boolean;
  setDisplayLine: React.Dispatch<React.SetStateAction<boolean>>;
  displayDonut: boolean;
  setDisplayDonut: React.Dispatch<React.SetStateAction<boolean>>;
  displayBar: boolean;
  setDisplayBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DonutGraphProps {
  logData: LogItem;
  className: string;
}