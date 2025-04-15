import { ComboboxData } from "@mantine/core";
import { ChangeEventHandler } from "react";
import { Control, FieldValues, RegisterOptions } from "react-hook-form";
import { Path } from "react-hook-form";
import { UseFormRegister } from "react-hook-form";

export interface InputProps<RegisterInputsType extends FieldValues> {
  label?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  placeholder?: string;
  description?: string;
  disabled?: boolean;
  visible?: boolean;
  defaultValue?: string | number | string[] | null;
  register: UseFormRegister<RegisterInputsType>;
  registerName: Path<RegisterInputsType>;
  registerOptions?: RegisterOptions<RegisterInputsType>;
  error?: string;
  hidden?: boolean;
  className?: string;
  successInputStyle?: string;
  errorInputStyle?: string;
  labelInputStyle?: string;
  onClick?: () => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string | number | readonly string[];
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export interface PhoneInputProps<RegisterInputsType extends FieldValues>
  extends Omit<InputProps<RegisterInputsType>, "register"> {
  control: Control<RegisterInputsType>;
  defaultValue?: string | number;
}

export interface NumberInputProps<RegisterInputsType extends FieldValues>
  extends Omit<InputProps<RegisterInputsType>, "register"> {
  control: Control<RegisterInputsType>;
  defaultValue?: string | number;
  allowNegative?: boolean;
  allowDecimal?: boolean;
  min?: number;
  hideControls?: boolean;
}

export interface SelectOptionInputProps<RegisterInputsType extends FieldValues>
  extends Omit<InputProps<RegisterInputsType>, "register"> {
  control?: Control<RegisterInputsType>;
  defaultValue?: string | null;
  data: ComboboxData;
  allowDeselect?: boolean;
}

export interface MultiSelectOptionInputProps<
  RegisterInputsType extends FieldValues
> extends Omit<InputProps<RegisterInputsType>, "register"> {
  control: Control<RegisterInputsType>;
  defaultValue?: string[];
  data: ComboboxData;
  allowDeselect?: boolean;
  maxValues?: number;
  hidePickedOptions?: boolean;
}

export interface TextAreaInputProps<RegisterInputsType extends FieldValues>
  extends InputProps<RegisterInputsType> {
  defaultValue?: string;
  rows?: number;
  minRows?: number;
  maxRows?: number;
  autosize?: boolean;
  resize?: React.CSSProperties["resize"];
}

export interface TextInputProps<RegisterInputsType extends FieldValues>
  extends InputProps<RegisterInputsType> {
  defaultValue?: string;
}

export interface PasswordInputProps<RegisterInputsType extends FieldValues>
  extends InputProps<RegisterInputsType> {
  defaultValue?: string;
}

export interface RadioInputProps<RegisterInputsType extends FieldValues>
  extends Omit<
    InputProps<RegisterInputsType>,
    "register" | "registerName" | "onChange"
  > {
  groupName: string;
  groupLabel?: string;
  groupDescription?: string;
  options: {
    label: string;
    value: string | number;
  }[];
  onChange: (value: string) => void;
  defaultValue: string;
}
