import { Roles } from "@/constants/data";

export interface RegisterFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string | number;
  password: string;
  confirmPassword?: string;
  role: Roles;
}

export interface LoginFormInput {
  email: string;
  password: string;
  role: Roles;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string | number;
  message: string;
}

export interface PlantFormInput {
  name: string;
  description: string;
  growingSeason: string[];
  temperatureRange: string;
  growingProcess: {
    instructions: string;
  }[];
  lightRequirements: string;
  wateringRequirements: string;
  soilRequirements: string;
  fertilizerDetails: string;
  customFields?: {
    key: string;
    value: string;
  }[];
  categoryID: string;
}

export interface CategoryFormInput {
  name: string;
  description: string;
}
