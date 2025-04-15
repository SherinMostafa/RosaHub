import { HTTPStatus } from "@/constants/httpStatus";
import CreateResponse from "./CreateResponse";
import Console from "@/utils/ConsoleUtility";
import Capitalize from "@/helpers/CapitalizeFormatter";

export default function CreateErrorResponse({ error }: { error: any }) {
  const formattedErrors: string[] = [];

  Console({
    level: "error",
    message: "Error!",
    data: error,
  });

  if (error.name === "OverwriteModelError") {
    return CreateResponse({
      message: "Model Already Exists!",
      errors: formattedErrors,
      status: HTTPStatus.INTERNAL_SERVER_ERROR,
    });
  }

  if (error.code === 11000) {
    const field = Object.keys(error.keyValue)[0];
    const value = error.keyValue[field];

    formattedErrors.push(
      `${Capitalize(value)} is already taken. Please try another one.`
    );

    return CreateResponse({
      message: `${Capitalize(field)} Already Exists!`,
      errors: formattedErrors,
      status: HTTPStatus.CONFLICT,
    });
  }

  if (error.name === "ValidationError") {
    for (const key in error.errors) {
      const errorDetail = error.errors[key];
      const field = Capitalize(key);

      switch (errorDetail.kind) {
        case "required":
          formattedErrors.push(`${field} is required.`);
          break;
        case "enum":
          formattedErrors.push(
            `${field} must be one of the following: ${errorDetail.properties.enumValues.join(
              ", "
            )}.`
          );
          break;
        case "minlength":
          formattedErrors.push(
            `${field} must be at least ${errorDetail.properties.minlength} characters long.`
          );
          break;
        case "maxlength":
          formattedErrors.push(
            `${field} must not exceed ${errorDetail.properties.maxlength} characters.`
          );
          break;
        default:
          formattedErrors.push(errorDetail.message || `${field} is invalid.`);
      }
    }

    return CreateResponse({
      message: "Validation Failed!",
      errors: formattedErrors,
      status: HTTPStatus.UNPROCESSABLE_CONTENT,
    });
  }

  if (formattedErrors.length === 0) {
    formattedErrors.push(
      "An unexpected error occurred. Please try again later."
    );
  }

  return CreateResponse({
    message: "Unexpected Error!",
    errors: formattedErrors,
    status: HTTPStatus.INTERNAL_SERVER_ERROR,
  });
}
