import {
  QueryKey,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { APIResponse } from "@/interfaces/api";
import { useRouter } from "next/navigation";
import Notification from "@/utils/NotificationUtility";
import { ErrorMessageFormatter } from "@/helpers";
import { HTTPStatus } from "@/constants/httpStatus";
import { queryClient } from "@/utils/QueryClientUtility";

export function useApiMutation<T, U extends { _id?: string }>({
  mutationFn,
  queryKey,
  successTitleMessage,
  successRedirectUrl,
  paramID = false,
  onSettledCallback,
}: {
  mutationFn: (payload: T) => Promise<APIResponse<U>>;
  queryKey: QueryKey;
  successTitleMessage: string;
  successRedirectUrl?: string;
  paramID?: boolean;
  onSettledCallback?: (
    status: "success" | "fail",
    response?: APIResponse
  ) => void;
}) {
  const router = useRouter();

  const mutation: UseMutationResult<
    APIResponse<U>,
    unknown,
    T,
    unknown
  > = useMutation({
    mutationFn: mutationFn,
    mutationKey: queryKey,
    onSettled(response) {
      queryClient.invalidateQueries({
        queryKey: queryKey,
        refetchType: "all",
      });

      if (
        response?.status === HTTPStatus.OK ||
        response?.status === HTTPStatus.CREATED ||
        response?.status === HTTPStatus.ACCEPTED
      ) {
        Notification({
          title: successTitleMessage,
          message: response.response.message!,
        }).Success();

        {
          if (onSettledCallback) {
            onSettledCallback("success", response);
          }

          if (successRedirectUrl)
            router.push(
              `${successRedirectUrl}${
                paramID ? `/${response.response.data?._id}` : ""
              }`
            );
        }
      }

      if (response?.message && response.response.errors) {
        const errors = ErrorMessageFormatter(response.response.errors);

        Notification({
          title: response.response.message,
          message: response.message,
        }).Error({
          errors: errors,
        });
      }
    },
  });

  return {
    mutate: mutation.mutate,
    isPending: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
  };
}
