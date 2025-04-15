import { NumberInputProps } from "@/interfaces/Inputs";
import { Controller, FieldValues } from "react-hook-form";
import { NumberInput } from "@mantine/core";

export default function Number<RegisterInputsType extends FieldValues>({
  label,
  size,
  description,
  defaultValue,
  allowNegative,
  allowDecimal,
  hideControls,
  min,
  disabled,
  registerName,
  registerOptions,
  error,
  hidden,
  control,
  className,
  successInputStyle,
  errorInputStyle,
  labelInputStyle,
  children,
}: NumberInputProps<RegisterInputsType>) {
  return (
    <div className={`relative w-full pb-6 min-w-40 ${className}`}>
      <Controller
        name={registerName}
        control={control}
        rules={registerOptions}
        render={({ field }) => (
          <NumberInput
            label={label}
            size={size}
            description={description}
            allowNegative={allowNegative}
            allowDecimal={allowDecimal}
            min={min}
            stepHoldDelay={500}
            stepHoldInterval={100}
            hideControls={hideControls}
            defaultValue={defaultValue}
            disabled={disabled}
            {...field}
            error={!!error}
            withErrorStyles={false}
            classNames={{
              label: `mb-2 font-semibold ${labelInputStyle}`,
              input: error
                ? `border border-error-light ${errorInputStyle}`
                : `border-success-light ${successInputStyle}`,
            }}
          />
        )}
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
