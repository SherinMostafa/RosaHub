import { notifications } from "@mantine/notifications";
import { IconCheck, IconExclamationCircleFilled } from "@tabler/icons-react";

export default function Notification({
  title,
  message,
  position = "top-right",
}: {
  title: string;
  message: string;
  position?:
    | "bottom-center"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "top-left"
    | "top-right";
}) {
  function SuccessNotification() {
    notifications.show({
      title: title,
      message: message,
      style: { alignItems: "flex-start", padding: "14px 14px 14px 20px" },
      color: "teal",
      icon: <IconCheck />,
      position: position,
    });
  }
  
  function ErrorNotification({
    errors,
  }: {
    errors: JSX.Element[] | string[] | string;
  }) {
    notifications.show({
      title: title,
      message: <div>{errors || message}</div>,
      style: { alignItems: "flex-start", padding: "14px 14px 14px 20px" },
      icon: <IconExclamationCircleFilled color="red" size={32} />,
      color: "none",
      position: position,
    });
  }

  return {
    Success: SuccessNotification,
    Error: ErrorNotification,
  };
}
