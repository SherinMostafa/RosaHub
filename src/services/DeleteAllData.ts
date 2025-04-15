import { APIResponse } from "@/interfaces/api";
import APIRequest from "@/utils/api/APIRequest";

export default async function DeleteAllData(
  token: string,
  viewURL: string
): Promise<APIResponse<{}>> {
  return await APIRequest({
    method: "DELETE",
    endpoint: `/dashboard/${viewURL}`,
    token: token,
  });
}
