import { APIResponse } from "@/interfaces/api";
import APIRequest from "@/utils/api/APIRequest";

export default async function UpdateSingleDataStatus(
  token: string,
  id: string,
  viewURL: string,
  status: "Accepted" | "Rejected"
): Promise<APIResponse<{ _id: string }>> {
  return await APIRequest({
    method: "PUT",
    endpoint: `/dashboard/${viewURL}/${id}`,
    token: token,
    params: { status: status },
  });
}
