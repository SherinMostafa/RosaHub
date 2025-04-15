import { HTTPStatus } from "@/constants/httpStatus";
import { Category } from "@/interfaces/data";
import APIRequest from "@/utils/api/APIRequest";

export default async function FetchSingleCategoryData(
  categoryID: string
): Promise<Category | null> {
  const { response, status } = await APIRequest({
    method: "GET",
    endpoint: `/dashboard/categories/${categoryID}`,
  });

  if (status === HTTPStatus.OK) {
    return response.data as Category;
  }

  return null;
}
