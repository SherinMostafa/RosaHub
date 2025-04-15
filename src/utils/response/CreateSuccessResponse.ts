import { HTTPStatus } from "@/constants/httpStatus";
import CreateResponse from "./CreateResponse";

export default function CreateSuccessResponse<T = unknown>({
  data,
  message = "Success",
  status = HTTPStatus.OK,
}: {
  data?: T;
  message: string;
  status?: HTTPStatus;
}) {
  return CreateResponse({ message, data, status });
}
