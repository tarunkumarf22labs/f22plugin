import { MutableRef } from "preact/hooks";

export interface cssvalinterface {
  bottom?: string;
  right?: string;
  left?: string;
  top?: string;
  transform: string;
}

export interface LargeComponentprops {
  cssval: cssvalinterface;
  handleCloseforlargesize: () => void;
  video: string;
  videoEl: MutableRef<HTMLVideoElement | null>;
  handlemuted: () => void;
  muted: boolean;
  handleChange: (e: string) => void;
  show: boolean;
  buttons: never[];
}

export interface SmallComponentprops {
  cmpclose: () => void;
  video: string;
  setinitialsize: (e: boolean) => void;
  data: any;
  base: string;
  round: boolean;
  onlocalchange : () => void;
}
