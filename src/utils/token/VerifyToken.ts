import "server-only";

import { jwtVerify } from "jose";

interface JwtPayload {
  userID: string;
  role: string;
}

export default async function VerifyToken(token: string) {
  const JWT_SECRET = process.env.JWT_SECRET!;
  const encodedKey = new TextEncoder().encode(JWT_SECRET);

  if (!JWT_SECRET) throw new Error("JWT_SECRET is missing!");

  if (!token) return null;

  try {
    const { payload } = (await jwtVerify(token, encodedKey, {
      algorithms: ["HS256"],
    })) as { payload: JwtPayload };

    return {
      userID: payload.userID,
      role: payload.role,
    };
  } catch (error: unknown) {
    return undefined;
  }
}
