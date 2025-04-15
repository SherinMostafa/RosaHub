import { Button, Tooltip } from "@mantine/core";
import { IButton } from "@/interfaces/Buttons";

export default function SubmitButton({
  label = "Submit",
  onClick,
  loading = false,
  disabled = false,
  hideTooltip = true,
  className,
  fullWidth,
  children,
}: Partial<IButton>) {
  return (
    <div className={`mt-2 ${className}`}>
      <Tooltip
        label="Please provide all necessary details."
        position="top"
        offset={6}
        className="bg-neutral-grey-dark"
        closeDelay={2000}
        hidden={hideTooltip}
      >
        <Button
          type="submit"
          onClick={onClick}
          loading={loading}
          variant="default"
          disabled={disabled}
          className={`!text-white tracking-widest font-italiana px-8 py-2 mx-auto flex items-center justify-center transition-all duration-300 
            ${
              disabled
                ? "!bg-neutral-grey-light"
                : "!bg-primary-light hover:!bg-primary-dark"
            }
          `}
          fullWidth={fullWidth}
        >
          {label}
        </Button>
      </Tooltip>
      {children}
    </div>
  );
}
