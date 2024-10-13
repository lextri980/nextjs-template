import { InputProps } from "@nextui-org/react";
import { Control, FieldValues } from "react-hook-form";

export interface IFormInput<T extends FieldValues> extends InputProps {
  // Common props
  type?: string;
  control: Control<T>;
  name: string;

  errorMessage?: React.ReactNode | (() => React.ReactNode);
  defaultValue?: string;
  variant?: "flat" | "bordered" | "faded" | "underlined";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  label?: React.ReactNode;
  labelPlacement?: "inside" | "outside" | "outside-left";
  placeholder?: string;
  validationBehavior?: "native" | "aria";
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isClearable?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  validationState?: "valid" | "invalid";
  disableAnimation?: boolean;
  classNames?: Record<
    | "base"
    | "label"
    | "inputWrapper"
    | "innerWrapper"
    | "mainWrapper"
    | "input"
    | "clearButton"
    | "helperWrapper"
    | "description"
    | "errorMessage",
    string
  >;
  // Password
  isVisible?: boolean;
}
