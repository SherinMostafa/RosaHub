import { Textarea } from "@mantine/core";
import { FieldValues } from "react-hook-form";

import { TextAreaInputProps } from "@/interfaces/Inputs";

export default function TextArea<InputsType extends FieldValues>({
  label,
  size,
  placeholder,
  description,
  rows,
  minRows,
  maxRows,
  autosize,
  resize,
  defaultValue,
  register,
  registerName,
  registerOptions,
  error,
  hidden,
  className,
  successInputStyle,
  errorInputStyle,
  labelInputStyle,
  children,
}: TextAreaInputProps<InputsType>) {
  return (
    <div className={`relative w-full pb-6 min-w-40 ${className}`}>
      <Textarea
        label={label}
        size={size}
        description={description}
        placeholder={placeholder}
        rows={rows}
        minRows={minRows}
        maxRows={maxRows}
        autosize={autosize}
        resize={resize}
        defaultValue={defaultValue}
        {...register(registerName, registerOptions)}
        error={!!error}
        withErrorStyles={false}
        classNames={{
          label: `mb-2 font-semibold ${labelInputStyle}`,
          input: error
            ? `border border-error-light ${errorInputStyle}`
            : `border-success-light ${successInputStyle}`,
        }}
      />

      <p
        className={`text-error-light text-xs font-semibold mt-1 absolute ${
          hidden && "hidden"
        }`}
      >
        {error}
      </p>

      {children}
    </div>
  );
}
