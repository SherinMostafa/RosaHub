import { MantineStyleProp } from "@mantine/core";
import { MouseEventHandler } from "react";

export interface IButton {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
  disabled: boolean;
  hideTooltip: boolean;
  className: string;
  type: "button" | "submit" | "reset";
  buttonColor: string;
  fullWidth: boolean;
  href: string;
  style: MantineStyleProp;
  children: React.ReactNode;
}
