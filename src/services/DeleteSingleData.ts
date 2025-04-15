import { APIResponse } from "@/interfaces/api";
import APIRequest from "@/utils/api/APIRequest";

export default async function DeleteSingleData(
  token: string,
  id: string,
  viewURL: string
): Promise<APIResponse<{ _id: string }>> {
  return await APIRequest({
    method: "DELETE",
    endpoint: `/dashboard/${viewURL}/${id}`,
    token: token,
  });
}
