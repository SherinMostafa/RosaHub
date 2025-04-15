type Levels =
  | "info"
  | "warn"
  | "error"
  | "debug"
  | "trace"
  | "log"
  | "assert"
  | "dir"
  | "table";

export default function Console({
  level,
  message,
  data,
  group,
  endGroup = false,
}: {
  level: Levels;
  message: string;
  data?: unknown;
  group?: string;
  endGroup?: boolean;
}) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}`;

  if (group && !endGroup) {
    console.groupCollapsed(`[Group: ${group}]`);
  }

  const consoleMethod = console[level as keyof Console] as (
    ...args: unknown[]
  ) => void;

  if (data) {
    consoleMethod(logMessage, data);
  } else consoleMethod(logMessage);

  if (group && endGroup) {
    console.groupEnd();
    console.log(`[Group: ${group}]`);
  }
}
