import { MultiSelect } from "@mantine/core";
import { Controller, FieldValues } from "react-hook-form";

import { MultiSelectOptionInputProps } from "@/interfaces/Inputs";

export default function MultiSelectOption<
  RegisterInputsType extends FieldValues
>({
  label,
  placeholder,
  description,
  defaultValue,
  maxValues,
  hidePickedOptions,
  control,
  registerName,
  registerOptions,
  error,
  hidden,
  className,
  successInputStyle,
  errorInputStyle,
  labelInputStyle,
  data,
  children,
}: MultiSelectOptionInputProps<RegisterInputsType>) {
  return (
    <div className={`relative w-full pb-6 min-w-40 ${className}`}>
      <Controller
        name={registerName}
        control={control}
        rules={registerOptions}
        render={({ field }) => (
          <MultiSelect
            label={label}
            description={description}
            placeholder={placeholder}
            defaultValue={defaultValue}
            data={data}
            searchable
            clearable
            withCheckIcon={false}
            maxDropdownHeight={166}
            maxValues={maxValues}
            hidePickedOptions={hidePickedOptions}
            nothingFoundMessage="Nothing found"
            {...field}
            error={!!error}
            withErrorStyles={false}
            classNames={{
              label: `mb-2 font-semibold ${labelInputStyle}`,
              input: error
                ? `border border-error-light ${errorInputStyle}`
                : `border-success-light ${successInputStyle}`,
            }}
            comboboxProps={{
              transitionProps: { transition: "pop", duration: 200 },
              shadow: "md",
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
