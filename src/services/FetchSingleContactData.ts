import { HTTPStatus } from "@/constants/httpStatus";
import { Contact } from "@/interfaces/data";
import APIRequest from "@/utils/api/APIRequest";

export default async function FetchSingleContactData(
  token: string,
  contactID: string
): Promise<Contact | null> {
  const { response, status } = await APIRequest({
    method: "GET",
    endpoint: `/dashboard/contacts/${contactID}`,
    token: token,
  });

  if (status === HTTPStatus.OK) {
    return response.data as Contact;
  }

  return null;
}
