export default function NumericValidator(value: unknown) {
  if (typeof value !== "number") {
    return "The value must be a number.";
  }

  if (typeof value === "number" && value <= 1) {
    return "The value must be at least 1 or more.";
  }
}
