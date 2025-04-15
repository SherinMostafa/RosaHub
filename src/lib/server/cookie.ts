"use server";

import { cookies } from "next/headers";

export async function GetCookie(): Promise<string | null> {
  return cookies().get("cookie")?.value || null;
}
