import { LoginForm } from "@/components/forms";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold pb-2 border-b-2 w-6 border-primary-light">
          Login
        </p>

        <h2 className="font-italiana text-xl font-normal text-primary-light w-fit">
          RosaHub
        </h2>
      </div>

      <LoginForm role={"User"} />

      <div className="text-center">
        <p className="text-xs font-semibold">
          Do not have an account? &nbsp;
          <Link href={"/register"} className="text-primary-light">
            Register
          </Link>
        </p>
      </div>
    </>
  );
}
