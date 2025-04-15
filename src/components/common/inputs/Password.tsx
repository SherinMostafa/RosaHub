import { PasswordInputProps } from "@/interfaces/Inputs";
import { PasswordInput } from "@mantine/core";
import { FieldValues } from "react-hook-form";

export default function Password<RegisterInputsType extends FieldValues>({
  label,
  size,
  placeholder,
  description,
  defaultValue,
  visible = true,
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
}: PasswordInputProps<RegisterInputsType>) {
  return (
    <div className={`relative w-full pb-6 min-w-40 ${className}`}>
      <PasswordInput
        label={label}
        size={size}
        description={description}
        placeholder={placeholder}
        defaultValue={defaultValue}
        maxLength={12}
        {...register(registerName, registerOptions)}
        error={!!error}
        withErrorStyles={false}
        classNames={{
          label: `mb-2 font-semibold ${labelInputStyle}`,
          input: error
            ? `border border-error-light ${errorInputStyle}`
            : `border-success-light ${successInputStyle}`,
          visibilityToggle: visible ? undefined : `hidden`,
        }}
        data-test={label}
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
