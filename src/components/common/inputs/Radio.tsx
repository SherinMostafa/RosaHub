import { RadioInputProps } from "@/interfaces/Inputs";
import { CheckIcon, Radio } from "@mantine/core";
import { FieldValues } from "react-hook-form";

export default function RadioInput<RegisterInputsType extends FieldValues>({
  groupName,
  groupLabel,
  groupDescription,
  size,
  className,
  labelInputStyle,
  options,
  defaultValue,
  onChange,
}: RadioInputProps<RegisterInputsType>) {
  return (
    <div className={`relative w-full pb-6 min-w-40 ${className}`}>
      <Radio.Group
        name={groupName}
        label={groupLabel}
        description={groupDescription}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        <div>
          {options.map((option, index) => (
            <Radio
              key={index}
              label={option.label}
              value={option.value}
              size={size}
              icon={CheckIcon}
              color="#5cb25d"
              classNames={{
                label: `mb-2 font-semibold ${labelInputStyle}`,
              }}
            />
          ))}
        </div>
      </Radio.Group>
    </div>
  );
}
