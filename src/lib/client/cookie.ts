"use client";

import Cookies from "js-cookie";

export async function SetCookie(token: string) {
  Cookies.set("cookie", token, {
    secure: true,
    httpOnly: false,
    sameSite: "strict",
    expires: 7,
    path: "/",
  });
}

export async function DeleteCookie() {
  Cookies.remove("cookie");
}
