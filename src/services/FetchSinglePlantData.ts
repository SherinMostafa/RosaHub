import { HTTPStatus } from "@/constants/httpStatus";
import { Plant } from "@/interfaces/data";
import APIRequest from "@/utils/api/APIRequest";

export default async function FetchSinglePlantData(
  plantID: string
): Promise<Plant | null> {
  const { response, status } = await APIRequest({
    method: "GET",
    endpoint: `/dashboard/plants/${plantID}`,
  });

  if (status === HTTPStatus.OK) {
    return response.data as Plant;
  }

  return null;
}
