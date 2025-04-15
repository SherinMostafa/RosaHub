"use client";

import { useApiMutation } from "@/hooks/useAPIMutation";
import { APIResponse } from "@/interfaces/api";
import { Plant } from "@/interfaces/data";
import { PlantFormInput } from "@/interfaces/Forms";
import APIRequest from "@/utils/api/APIRequest";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import {
  MultiSelectOptionInput,
  NumberInput,
  SelectOptionInput,
  TextAreaInput,
  TextInput,
} from "../common/inputs";
import { ClickButton, SubmitButton } from "../common/buttons";

export default function CreatePlant({
  token,
  categories,
}: {
  token: string;
  categories: { label: string; value: string }[];
}) {
  async function createPlantRequest(
    payload: PlantFormInput
  ): Promise<APIResponse<Plant>> {
    return await APIRequest<PlantFormInput, Plant>({
      method: "POST",
      endpoint: "/dashboard/plants",
      payload: payload,
      token: token!,
    });
  }
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isValid, isSubmitted },
  } = useForm<PlantFormInput>({
    defaultValues: {
      growingProcess: [{ instructions: "" }],
    },
  });

  const {
    fields: growingProcess,
    append: appendProcess,
    remove: removeProcess,
  } = useFieldArray({
    control,
    name: "growingProcess",
  });

  const {
    fields: customFields,
    append: appendCustomField,
    remove: removeCustomField,
  } = useFieldArray({
    control,
    name: "customFields",
  });

  const { mutate, isPending } = useApiMutation({
    mutationFn: createPlantRequest,
    queryKey: ["Plants"],
    successTitleMessage: "Congratulations!",
    successRedirectUrl: `/dashboard/plants`,
    paramID: true,
  });

  const onSubmit: SubmitHandler<PlantFormInput> = async (data) => {
    const payload = {
      ...data,
      customFields: data.customFields?.reduce(
        (accumulator: any, field: { key: string; value: string }) => {
          accumulator[field.key] = field.value;
          return accumulator;
        },
        {}
      ),
    };

    mutate(payload);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-x-4 flex-wrap">
        <TextInput
          label="Plant Name"
          register={register}
          registerName="name"
          registerOptions={{
            required: "Plant name is required.",
          }}
          error={errors.name?.message}
          className="flex-1"
        />

        <SelectOptionInput
          label="Category"
          placeholder="Select a categroy"
          control={control}
          registerName={"categoryID"}
          registerOptions={{
            required: "Category is required.",
          }}
          data={categories}
          error={errors.categoryID?.message}
          className="flex-1"
        />
      </div>

      <div className="flex gap-x-4 flex-wrap">
        <MultiSelectOptionInput
          label="Growing Season"
          placeholder="Select a season"
          control={control}
          registerName={"growingSeason"}
          registerOptions={{
            required: "Season is required.",
          }}
          data={["Spring", "Summer", "Fall", "Winter"]}
          hidePickedOptions
          error={errors.growingSeason?.message}
          className="flex-1"
        />

        <TextInput
          label="Temperature Range"
          register={register}
          registerName="temperatureRange"
          registerOptions={{
            required: "Temperature is required.",
          }}
          error={errors.temperatureRange?.message}
          className="flex-1"
        />
      </div>

      <section className="my-2">
        <h4 className="font-semibold text-sm mb-2">Growing Process</h4>

        <div className="my-4 space-y-6">
          <div className="border-l border-primary-light pl-4 pt-6 space-y-2">
            {growingProcess.map((process, index) => {
              return (
                <div key={process.id} className="flex items-stretch gap-x-4">
                  <span className="font-semibold text-sm">{index + 1}</span>

                  <TextAreaInput
                    register={register}
                    registerName={`growingProcess.${index}.instructions`}
                    autosize
                    minRows={1}
                    resize="vertical"
                    registerOptions={{
                      required: "Step instructions is required.",
                    }}
                    error={
                      errors.growingProcess?.[index]?.instructions?.message
                    }
                    className="md:flex-1"
                  />
                  {growingProcess.length > 1 && (
                    <ClickButton
                      label="X"
                      className="mt-0 w-fit lg:w-auto"
                      fullWidth
                      buttonColor="bg-error-light text-white hover:text-white hover:bg-error-dark !px-3"
                      onClick={() => removeProcess(index)}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <ClickButton
            label="Add New Step"
            className="w-full"
            fullWidth
            onClick={() =>
              appendProcess({
                instructions: "",
              })
            }
          />
        </div>
      </section>

      <TextAreaInput
        label="Description"
        register={register}
        registerName="description"
        registerOptions={{
          required: "Description is required.",
        }}
        autosize
        minRows={3}
        resize="vertical"
        error={errors.description?.message}
      />

      <div className="flex gap-x-4 flex-wrap">
        <TextInput
          label="Light Requirements"
          register={register}
          registerName="lightRequirements"
          registerOptions={{
            required: "Light is required.",
          }}
          error={errors.lightRequirements?.message}
          className="flex-1"
        />

        <TextInput
          label="Soil Requirements"
          register={register}
          registerName="soilRequirements"
          registerOptions={{
            required: "Soil is required.",
          }}
          error={errors.soilRequirements?.message}
          className="flex-1"
        />
      </div>

      <div className="flex gap-x-4 flex-wrap">
        <TextInput
          label="Watering Requirements"
          register={register}
          registerName="wateringRequirements"
          registerOptions={{
            required: "Watering is required.",
          }}
          error={errors.wateringRequirements?.message}
          className="flex-1"
        />

        <TextInput
          label="Fertilizer Details"
          register={register}
          registerName="fertilizerDetails"
          registerOptions={{
            required: "Fertilizer is required.",
          }}
          error={errors.fertilizerDetails?.message}
          className="flex-1"
        />
      </div>

      <section className="flex gap-x-4 items-center justify-between flex-wrap mb-2">
        <ClickButton
          label="Add Additional Details"
          className="mt-2 w-full lg:w-auto lg:ml-auto"
          fullWidth
          onClick={() =>
            appendCustomField({
              key: "",
              value: "",
            })
          }
        />
      </section>

      {customFields.map((field, index) => {
        return (
          <section
            key={field.id}
            className="flex gap-x-4 gap-y-2 flex-wrap border-b border-neutral-grey-light pb-4 mb-4"
          >
            <TextInput
              placeholder="Label"
              register={register}
              registerName={`customFields.${index}.key`}
              registerOptions={{
                required: "Label is required.",
              }}
              error={errors.customFields?.[index]?.key?.message}
              className="md:max-w-36"
            />

            <TextAreaInput
              placeholder="Details"
              register={register}
              registerName={`customFields.${index}.value`}
              autosize
              minRows={1}
              resize="vertical"
              registerOptions={{
                required: "Details is required.",
              }}
              error={errors.customFields?.[index]?.value?.message}
              className="md:flex-1"
            />

            <ClickButton
              label="Remove"
              className="!my-0 w-full lg:w-auto"
              fullWidth
              buttonColor="bg-error-light text-white hover:text-white hover:bg-error-dark"
              onClick={() => removeCustomField(index)}
            />
          </section>
        );
      })}

      <SubmitButton
        label="Add Plant"
        fullWidth
        loading={isPending}
        disabled={isPending || (isSubmitted && !isValid)}
        hideTooltip={isPending || !isSubmitted || isValid}
      />
    </form>
  );
}
