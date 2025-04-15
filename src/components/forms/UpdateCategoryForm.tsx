"use client";

import { useApiMutation } from "@/hooks/useAPIMutation";
import { APIResponse } from "@/interfaces/api";
import { Category } from "@/interfaces/data";
import APIRequest from "@/utils/api/APIRequest";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "../common/inputs";
import { SubmitButton } from "../common/buttons";
import { CategoryFormInput } from "@/interfaces/Forms";

export default function UpdateCategory({
  token,
  category,
}: {
  token: string;
  category: Category;
}) {
  async function updateCategoryRequest(
    payload: CategoryFormInput
  ): Promise<APIResponse<Category>> {
    return await APIRequest<CategoryFormInput, Category>({
      method: "PUT",
      endpoint: `/dashboard/categories/${category._id}`,
      payload: payload,
      token: token!,
    });
  }
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isSubmitted },
  } = useForm<CategoryFormInput>({
    defaultValues: {
      name: category.name,
      description: category.description,
    },
  });

  const { mutate, isPending } = useApiMutation({
    mutationFn: updateCategoryRequest,
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
      <h4 className="font-semibold text-2xl text-primary-light mb-8 border-l-2 border-l-primary-light pl-2">
        Update Category
      </h4>

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
        label="Update Category"
        fullWidth
        loading={isPending}
        disabled={isPending || (isSubmitted && !isValid)}
        hideTooltip={isPending || !isSubmitted || isValid}
      />
    </form>
  );
}
