"use client";

import { useApiMutation } from "@/hooks/useAPIMutation";
import { APIResponse } from "@/interfaces/api";
import { ContactFormInput } from "@/interfaces/Forms";
import APIRequest from "@/utils/api/APIRequest";
import { SubmitHandler, useForm } from "react-hook-form";
import { PhoneInput, TextAreaInput, TextInput } from "../common/inputs";
import { SubmitButton } from "../common/buttons";
import { Contact } from "@/interfaces/data";

export default function ContactUs() {
  async function createContactRequest(
    payload: ContactFormInput
  ): Promise<APIResponse<Contact>> {
    return await APIRequest<ContactFormInput, Contact>({
      method: "POST",
      endpoint: "/contacts",
      payload: payload,
    });
  }
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors, isValid, isSubmitted },
  } = useForm<ContactFormInput>();

  const { mutate, isPending } = useApiMutation({
    mutationFn: createContactRequest,
    queryKey: ["Contacts"],
    successTitleMessage: "Thank you for reaching out!",
    onSettledCallback: (status) => {
      if (status === "success") {
        reset({
          phone: "",
          name: "",
          email: "",
          message: "",
        });
      }
    },
  });

  const onSubmit: SubmitHandler<ContactFormInput> = async (data) => {
    const submitData = {
      name: data.name,
      email: data.email,
      phone: `+20${data.phone}`,
      message: data.message,
    };

    mutate(submitData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-x-4 flex-wrap">
        <TextInput
          placeholder="John William"
          register={register}
          registerName="name"
          registerOptions={{
            required: "Full name is required.",
          }}
          error={errors.name?.message}
          className="flex-1"
          successInputStyle="border-t-0 border-x-0 rounded-none"
          errorInputStyle="border-t-0 border-x-0 rounded-none"
          hidden
        />

        <PhoneInput
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
          className="flex-1"
          successInputStyle="border-t-0 border-x-0 rounded-none"
          errorInputStyle="border-t-0 border-x-0 rounded-none"
          hidden
        />
      </div>

      <TextInput
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
        successInputStyle="border-t-0 border-x-0 rounded-none"
        errorInputStyle="border-t-0 border-x-0 rounded-none"
        hidden
      />

      <TextAreaInput
        placeholder="Your message ..."
        register={register}
        registerName="message"
        registerOptions={{
          required: "Message is required.",
        }}
        autosize
        minRows={3}
        resize="vertical"
        error={errors.message?.message}
        successInputStyle="border-t-0 border-x-0 rounded-none"
        errorInputStyle="border-t-0 border-x-0 rounded-none"
        hidden
      />

      <SubmitButton
        label="Send"
        className="w-fit ml-auto"
        loading={isPending}
        disabled={isPending || (isSubmitted && !isValid)}
        hideTooltip={isPending || !isSubmitted || isValid}
      />
    </form>
  );
}
