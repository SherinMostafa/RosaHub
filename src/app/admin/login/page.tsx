import { LoginForm } from "@/components/forms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login",
};

export default function AdminLogin() {
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold pl-2 border-l-2 border-primary-light">
          Admin Panel
        </p>

        <h2 className="font-italiana text-xl font-normal text-primary-light w-fit">
          RosaHub
        </h2>
      </div>

      <LoginForm role="Admin" />
    </>
  );
}
