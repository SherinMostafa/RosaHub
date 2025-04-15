"use client";

import { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { RegisterFormInput } from "@/interfaces/Forms";
import { ConfirmPasswordValidator } from "@/validators";
import { useRouter } from "next/navigation";
import APIRequest from "@/utils/api/APIRequest";
import Notification from "@/utils/NotificationUtility";
import { ErrorMessageFormatter } from "@/helpers";
import { User } from "@/interfaces/data";
import { PasswordInput, PhoneInput, TextInput } from "../common/inputs";
import { SubmitButton } from "../common/buttons";

export default function Register() {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    getValues,
    control,
    formState: { errors, isValid, isSubmitting, isSubmitted },
  } = useForm<RegisterFormInput>();

  async function RegisterAPI(payload: RegisterFormInput) {
    const { response, status, message } = await APIRequest<
      RegisterFormInput,
      User
    >({ method: "POST", endpoint: "/auth/register", payload: payload });

    if (status === 201) {
      Notification({
        title: "Congratulations!",
        message: response.message,
      }).Success();

      router.push("/login");
    } else {
      const errors = ErrorMessageFormatter(response.errors!);

      Notification({ title: response.message, message: message! }).Error({
        errors: errors,
      });
    }
  }

  const onSubmit: SubmitHandler<RegisterFormInput> = async (data) => {
    data.role = "User";

    const submitData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: `+20${data.phone}`,
      password: data.password,
      role: data.role,
    };

    await RegisterAPI(submitData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-x-4 flex-wrap">
        <TextInput
          label="First Name"
          register={register}
          registerName={"firstName"}
          registerOptions={{
            required: "First name is required.",
            min: {
              value: 3,
              message: "First name must be at least 3 characters long.",
            },
          }}
          error={errors.firstName?.message}
          className="flex-1 min-w-40"
        />

        <TextInput
          label="Last Name"
          register={register}
          registerName={"lastName"}
          registerOptions={{
            required: "Last name is required.",
            minLength: {
              value: 3,
              message: "Last name must be at least 3 characters long.",
            },
          }}
          error={errors.lastName?.message}
          className="flex-1 min-w-40"
        />
      </div>

      <div className="flex gap-x-4 flex-wrap">
        <TextInput
          label="Email"
          register={register}
          registerName={"email"}
          registerOptions={{
            required: "Email is required.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "A valid email address is required.",
            },
          }}
          placeholder="email@gmail.com"
          error={errors.email?.message}
          className="flex-1 min-w-40"
        />

        <PhoneInput
          label="Phone"
          placeholder="10 1234 5678"
          control={control}
          registerName={"phone"}
          registerOptions={{
            required: "Phone is required.",
            minLength: {
              message: "Phone number must be exactly 8 digits long.",
              value: 12,
            },
            maxLength: {
              message: "Phone number must be exactly 8 digits long.",
              value: 12,
            },
          }}
          error={errors.phone?.message}
          className="flex-1 min-w-40"
        />
      </div>

      <PasswordInput
        label="Password"
        // labelInputStyle="font-sans"
        register={register}
        registerName={"password"}
        registerOptions={{
          required: "Password is required.",
          minLength: {
            message: "Password must be at least 8 characters long.",
            value: 8,
          },
          maxLength: {
            message: "Password must not exceed 12 characters long.",
            value: 12,
          },
        }}
        error={errors.password?.message}
      />

      <PasswordInput
        label="Confirm Password"
        // labelInputStyle="font-sans"
        visible={false}
        register={register}
        registerName={"confirmPassword"}
        registerOptions={{
          required: "Confirm password is required.",
          validate: (value: unknown) =>
            ConfirmPasswordValidator(getValues("password"), String(value)),
        }}
        error={errors.confirmPassword?.message}
      />

      <SubmitButton
        label="Register"
        fullWidth
        loading={isSubmitting}
        disabled={isSubmitting || (isSubmitted && !isValid)}
        hideTooltip={isSubmitting || !isSubmitted || isValid}
      />
    </form>
  );
}
