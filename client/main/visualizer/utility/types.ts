export interface InitializeObj {
  initialize: (chart: any) => void; // replace 'any' with the actual type of 'chart'
}

export interface GraphResizeProps {
  className: string;
  bindID: string;
  initializeObj: InitializeObj;
}

export interface OnceObject {
  initializedObserver: boolean;
}