import { PhoneInputProps } from "@/interfaces/Inputs";
import { Controller, FieldValues } from "react-hook-form";
import { NumberInput } from "@mantine/core";

export default function Phone<RegisterInputsType extends FieldValues>({
  label,
  size,
  description,
  placeholder,
  defaultValue,
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
}: PhoneInputProps<RegisterInputsType>) {
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
            placeholder={placeholder}
            allowNegative={false}
            allowDecimal={false}
            stepHoldDelay={500}
            stepHoldInterval={100}
            leftSection={"+20"}
            leftSectionWidth={40}
            leftSectionProps={{
              className: "text-neutral-dark text-[0.875rem] mt-[0.6px]",
            }}
            hideControls
            thousandSeparator=" "
            thousandsGroupStyle="wan"
            maxLength={12}
            defaultValue={defaultValue}
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
