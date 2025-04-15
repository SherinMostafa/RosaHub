import { Button } from "@mantine/core";
import { IButton } from "@/interfaces/Buttons";
import React, { ForwardedRef } from "react";

function ClickButton(
  {
    label,
    onClick,
    className,
    fullWidth,
    style,
    type = "button",
    children,
    buttonColor = "!text-white !bg-primary-light hover:!bg-primary-dark",
  }: Partial<IButton>,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <div className={`my-2 inline-block ${className}`}>
      <Button
        type={type}
        style={style}
        onClick={onClick}
        variant="default"
        className={`px-8 py-2 flex items-center justify-center ${buttonColor} transition-all duration-300`}
        fullWidth={fullWidth}
        ref={ref}
      >
        {label}

        {children}
      </Button>
    </div>
  );
}

export default React.forwardRef(ClickButton);
