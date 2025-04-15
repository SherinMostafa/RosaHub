"use client";

import { PasswordInput, TextInput } from "@/components/common/inputs";
import { SubmitButton } from "@/components/common/buttons";
import { LoginFormInput } from "@/interfaces/Forms";
import { SubmitHandler, useForm } from "react-hook-form";
import APIRequest from "@/utils/api/APIRequest";
import { useApiMutation } from "@/hooks/useAPIMutation";
import { APIResponse } from "@/interfaces/api";
import { User } from "@/interfaces/data";
import { Roles } from "@/constants/data";
import { SetCookie } from "@/lib/client/cookie";

async function loginUser(payload: LoginFormInput): Promise<APIResponse<User>> {
  return await APIRequest<LoginFormInput, User>({
    method: "POST",
    endpoint: "/auth/login",
    payload: payload,
  });
}

export default function Login({ role = "User" }: { role?: Roles }) {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isSubmitted },
  } = useForm<LoginFormInput>();

  const { mutate, isPending } = useApiMutation({
    mutationFn: loginUser,
    queryKey: ["User"],
    successTitleMessage: "Congratulations!",
    successRedirectUrl: `/${role === "Admin" ? "dashboard" : ""}`,
    async onSettledCallback(status, response) {
      if (status === "success") {
        const token = response?.response.token;

        await SetCookie(token!);
      }
    },
  });

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    data.role = role;

    const submitData = {
      email: data.email,
      password: data.password,
      role: data.role,
    };

    mutate(submitData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="Email"
        register={register}
        registerName="email"
        registerOptions={{
          required: "Email is required.",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address.",
          },
        }}
        placeholder="email@gmail.com"
        error={errors.email?.message}
      />

      <PasswordInput
        label="Password"
        register={register}
        registerName="password"
        registerOptions={{
          required: "Password is required.",
          minLength: { value: 8, message: "Must be at least 8 characters." },
          maxLength: { value: 12, message: "Must not exceed 12 characters." },
        }}
        error={errors.password?.message}
      />

      <SubmitButton
        label="Login"
        fullWidth
        loading={isPending}
        disabled={isPending || (isSubmitted && !isValid)}
        hideTooltip={isPending || !isSubmitted || isValid}
      />
    </form>
  );
}
