"use client";

import { useApiMutation } from "@/hooks/useAPIMutation";
import { APIResponse } from "@/interfaces/api";
import { Plant } from "@/interfaces/data";
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
import { PlantFormInput } from "@/interfaces/Forms";

export default function UpdatePlant({
  token,
  plant,
  categories,
}: {
  token: string;
  plant: Plant;
  categories: { label: string; value: string }[];
}) {
  async function updateCategoryRequest(
    payload: PlantFormInput
  ): Promise<APIResponse<Plant>> {
    return await APIRequest<PlantFormInput, Plant>({
      method: "PUT",
      endpoint: `/dashboard/plants/${plant._id}`,
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
      name: plant.name,
      description: plant.description,
      growingSeason: plant.growingSeason,
      temperatureRange: plant.temperatureRange,
      growingProcess: plant.growingProcess,
      lightRequirements: plant.lightRequirements,
      wateringRequirements: plant.wateringRequirements,
      soilRequirements: plant.soilRequirements,
      fertilizerDetails: plant.fertilizerDetails,
      customFields: Object.entries(plant.customFields || {}).map(
        ([key, value]) => ({
          key,
          value: typeof value === "string" ? value : "",
        })
      ),
      categoryID: plant.category._id.toString(),
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
    mutationFn: updateCategoryRequest,
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
      <h4 className="font-semibold text-2xl text-primary-light mb-8 border-l-2 border-l-primary-light pl-2">
        Update Plant
      </h4>

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
            required: "Growing season is required.",
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
            required: "Temperature range is required.",
          }}
          error={errors.temperatureRange?.message}
          className="flex-1"
        />
      </div>

      <section>
        <div className="flex gap-x-4 items-center justify-between flex-wrap mb-2">
          <h4 className="font-semibold">Growing Process</h4>

          <ClickButton
            label="Add New Step"
            className="mt-2 mb-4 w-full lg:w-auto lg:ml-auto"
            fullWidth
            onClick={() =>
              appendProcess({
                instructions: "",
              })
            }
          />
        </div>

        <div className="border px-8 py-6 rounded mb-6">
          {growingProcess.map((process, index) => {
            return (
              <div
                key={process.id}
                className="flex gap-x-4 gap-y-2 flex-wrap mb-4"
              >
                <TextAreaInput
                  label={"Instructions"}
                  register={register}
                  registerName={`growingProcess.${index}.instructions`}
                  autosize
                  minRows={1}
                  resize="vertical"
                  registerOptions={{
                    required: "Step instructions is required.",
                  }}
                  error={errors.growingProcess?.[index]?.instructions?.message}
                  className="md:flex-1"
                />

                {index !== 0 && (
                  <ClickButton
                    label="Remove"
                    className="md:mt-8 w-full lg:w-auto"
                    fullWidth
                    buttonColor="bg-error-light text-white hover:text-white hover:bg-error-dark"
                    onClick={() => removeProcess(index)}
                  />
                )}
              </div>
            );
          })}
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
            required: "Light requirements is required.",
          }}
          error={errors.lightRequirements?.message}
          className="flex-1"
        />

        <TextInput
          label="Soil Requirements"
          register={register}
          registerName="soilRequirements"
          registerOptions={{
            required: "Soil requirements is required.",
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
            required: "Watering requirements is required.",
          }}
          error={errors.wateringRequirements?.message}
          className="flex-1"
        />

        <TextInput
          label="Fertilizer Details"
          register={register}
          registerName="fertilizerDetails"
          registerOptions={{
            required: "Fertilizer details is required.",
          }}
          error={errors.fertilizerDetails?.message}
          className="flex-1"
        />
      </div>

      <section className="flex gap-x-4 items-center justify-between flex-wrap mb-2">
        <ClickButton
          label="Add Additional Details"
          className="mt-2 mb-4 w-full lg:w-auto lg:ml-auto"
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
            className="flex gap-x-4 gap-y-2 flex-wrap border-b border-neutral-grey-light pb-4 mb-10"
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
              className="my-0 md:-mt-0.5 w-full lg:w-auto"
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
