import { FieldErrors } from "react-hook-form";

export default function ErrorMessageFormatter(
  errors: string[] | FieldErrors<FormData>
): JSX.Element[] {
  if (!errors) {
    return [];
  }

  if (Array.isArray(errors)) {
    return errors.map((error, index) => (
      <p key={index} className="flex items-center w-full">
        • &nbsp;{error}
      </p>
    ));
  }

  // return Object.values(errors).map((error) => error.message as string);

  return Object.values(errors).map((error, index) => (
    <p key={index} className="flex items-center w-full">
      • &nbsp;{error.message}
    </p>
  ));
}
