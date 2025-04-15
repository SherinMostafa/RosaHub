"use client";

import DeleteSingleData from "@/services/DeleteSingleData";
import { ClickButton, LinkButton } from "../common/buttons";
import { APIResponse } from "@/interfaces/api";
import { useApiMutation } from "@/hooks/useAPIMutation";
import useDeleteModal from "@/hooks/useDeleteModal";
import { QueryKey } from "@tanstack/react-query";

export default function ActionButtons({
  id,
  entityType,
  entityName,
  token,
  queryKey,
  successRedirectUrl,
  acceptOrRejectButtons = false,
}: {
  id: string;
  entityType: string;
  entityName: string;
  token: string;
  queryKey: QueryKey;
  successRedirectUrl: string;
  acceptOrRejectButtons?: boolean;
}) {
  function handleDelete(id: string): Promise<APIResponse<{ _id: string }>> {
    return DeleteSingleData(token, id, entityType);
  }

  const { mutate } = useApiMutation({
    mutationFn: handleDelete,
    queryKey: queryKey,
    successTitleMessage: `Congratulations!`,
    successRedirectUrl: successRedirectUrl,
  });

  const Delete = useDeleteModal();

  return (
    <div className="space-x-2">
      {acceptOrRejectButtons ? (
        <>
          <ClickButton
            label="Accept"
            onClick={() => {
              Delete({
                entityName: entityName.toLowerCase(),
                onConfirm: () => mutate(id.toString()),
              });
            }}
          />
          <ClickButton
            label="Reject"
            onClick={() => {
              Delete({
                entityName: entityName.toLowerCase(),
                onConfirm: () => mutate(id.toString()),
              });
            }}
            buttonColor="!text-white bg-error-light border-error-light hover:bg-error-dark hover:!text-white"
          />
        </>
      ) : (
        <LinkButton label="Edit" href={`/dashboard/${entityType}/${id}/edit`} />
      )}
      <ClickButton
        label="Delete"
        onClick={() => {
          Delete({
            entityName: entityName.toLowerCase(),
            onConfirm: () => mutate(id.toString()),
          });
        }}
        buttonColor="!text-error-light border-error-light hover:bg-error-dark hover:!text-white"
      />
    </div>
  );
}
