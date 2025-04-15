import { RegisterForm } from "@/components/forms";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register",
};

export default function Register() {
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold pb-2 border-b-2 w-16 border-primary-light">
          Registeration
        </p>
        
        <h2 className="font-italiana text-xl font-normal text-primary-light w-fit">
          RosaHub
        </h2>
      </div>

      <RegisterForm />

      <div className="text-center">
        <p className="text-xs font-semibold">
          Already have an account? &nbsp;
          <Link href={"/login"} className="text-primary-light">
            Login
          </Link>
        </p>
      </div>
    </>
  );
}
