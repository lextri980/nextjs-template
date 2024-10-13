import { MouseEventHandler } from "react";

export interface IButton {
  children: React.ReactNode;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
  onClick: MouseEventHandler;
}
