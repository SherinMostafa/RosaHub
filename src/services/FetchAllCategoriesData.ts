import { HTTPStatus } from "@/constants/httpStatus";
import { Category } from "@/interfaces/data";
import APIRequest from "@/utils/api/APIRequest";

export default async function FetchAllCategoriesData() {
  const { response, status } = await APIRequest({
    method: "GET",
    endpoint: "/dashboard/categories",
  });

  if (status === HTTPStatus.OK) {
    return response.data as Category[];
  }

  return [];
}
