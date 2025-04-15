import Console from "@/utils/ConsoleUtility";
import { NextResponse } from "next/server";

export default function CreateRedirectResponse(pathname: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    return NextResponse.redirect(new URL(pathname, baseUrl));
  } catch (error) {
    Console({
      level: "error",
      message: "Invalid URL:",
      data: error,
    });
  }
}
