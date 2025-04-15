import { modals } from "@mantine/modals";

export default function useDeleteModal() {
  return ({
    entityName = "this record",
    confirmLabel = "Yes, Delete",
    cancelLabel = "Cancel",
    confirmColor = "#e53529",
    cancelColor = "#5cb25d",
    onConfirm,
  }: {
    entityName?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    title?: string;
    confirmColor?: string;
    cancelColor?: string;
    onConfirm: () => void;
  }) =>
    modals.openConfirmModal({
      title: "Delete Confirmation",
      centered: true,

      classNames: { title: "!text-error-light" },
      children: (
        <p className="text-sm font-medium">
          Are you sure you want to delete <span className="text-error-light">{entityName}</span>? This action is
          irreversible.
        </p>
      ),
      labels: { confirm: confirmLabel, cancel: cancelLabel },
      confirmProps: {
        color: confirmColor,
        className:
          "transition-all duration-300",
      },
      cancelProps: {
        color: cancelColor,
        variant: "outline",
        className:
          "hover:!bg-primary-dark hover:!text-white transition-all duration-300",
      },
      groupProps: {  },
      onConfirm: onConfirm,
    });
}
