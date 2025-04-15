"use client";

import { useApiMutation } from "@/hooks/useAPIMutation";
import { APIResponse } from "@/interfaces/api";
import { Category } from "@/interfaces/data";
import APIRequest from "@/utils/api/APIRequest";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "../common/inputs";
import { SubmitButton } from "../common/buttons";
import { CategoryFormInput } from "@/interfaces/Forms";
import { GetCookie } from "@/lib/server/cookie";

async function createCategoryRequest(
  payload: CategoryFormInput
): Promise<APIResponse<Category>> {
  const token = await GetCookie();

  return await APIRequest<CategoryFormInput, Category>({
    method: "POST",
    endpoint: "/dashboard/categories",
    payload: payload,
    token: token!,
  });
}

export default function CreateCategory() {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isSubmitted },
  } = useForm<CategoryFormInput>();

  const { mutate, isPending } = useApiMutation({
    mutationFn: createCategoryRequest,
    queryKey: ["Categories"],
    successTitleMessage: "Congratulations!",
    successRedirectUrl: `/dashboard/categories`,
    paramID: true,
  });

  const onSubmit: SubmitHandler<CategoryFormInput> = async (data) => {
    const submitData = {
      name: data.name,
      description: data.description,
    };

    mutate(submitData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="Name"
        register={register}
        registerName="name"
        registerOptions={{
          required: "Name is required.",
        }}
        error={errors.name?.message}
        className="max-w-sm"
      />

      <TextInput
        label="Description"
        register={register}
        registerName="description"
        registerOptions={{
          required: "Description is required.",
        }}
        error={errors.description?.message}
      />

      <SubmitButton
        label="Add Category"
        fullWidth
        loading={isPending}
        disabled={isPending || (isSubmitted && !isValid)}
        hideTooltip={isPending || !isSubmitted || isValid}
      />
    </form>
  );
}
