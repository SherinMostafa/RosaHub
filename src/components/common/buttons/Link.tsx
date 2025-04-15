import { Button } from "@mantine/core";
import { IButton } from "@/interfaces/Buttons";
import Link from "next/link";

export default function LinkButton({
  label = "Button",
  onClick,
  className,
  fullWidth,
  children,
  buttonColor = "!text-white !bg-primary-light hover:!bg-primary-dark",
  href = "",
}: Partial<IButton>) {
  return (
    <Link href={href} className={`my-2 inline-block ${className}`}>
      <Button
        type="button"
        onClick={onClick}
        variant="default"
        className={`tracking-wider px-8 py-2 flex items-center justify-center ${buttonColor} transition-all duration-300`}
        fullWidth={fullWidth}
      >
        {label}
      </Button>
      {children}
    </Link>
  );
}
