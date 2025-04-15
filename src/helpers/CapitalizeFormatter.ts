export default function Capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function CapitalizeAndSplit(string: string) {
  return (
    string.charAt(0).toUpperCase() +
    string
      .slice(1)
      .split(/(?=[A-Z])/)
      .join(" ")
      .toLowerCase()
  );
}
