import { HTTPStatus } from "@/constants/httpStatus";
import { User } from "@/interfaces/data";
import { GetCookie } from "@/lib/server/cookie";
import APIRequest from "@/utils/api/APIRequest";

export default async function FetchUserData(): Promise<User | null> {
  const token = await GetCookie();

  const { response, status } = await APIRequest({
    method: "GET",
    endpoint: `/user`,
    token: token!,
  });

  if (status === HTTPStatus.OK) {
    return response.data as User;
  }

  return null;
}
