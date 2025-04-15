import { TextInput } from "@mantine/core";
import { FieldValues } from "react-hook-form";

import { TextInputProps } from "@/interfaces/Inputs";

export default function Text<InputsType extends FieldValues>({
  label,
  size,
  placeholder,
  description,
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
}: TextInputProps<InputsType>) {
  return (
    <div className={`relative w-full pb-6 min-w-40 ${className}`}>
      <TextInput
        label={label}
        size={size}
        description={description}
        placeholder={placeholder}
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
