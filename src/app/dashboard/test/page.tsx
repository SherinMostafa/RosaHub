import { GetCookie } from "@/lib/server/cookie";
import Export from "./Export";

export default async function Test() {
  const token = await GetCookie();

  return (
    <div>
      page
      
      <Export token={token!} />
    </div>
  );
}
