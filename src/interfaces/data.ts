import { Roles, Status } from "@/constants/data";

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  role: Roles;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Plant {
  _id: string;
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
  category: {
    _id: string;
    name: string;
  };
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Category {
  _id: string;
  name: string;
  description: string;
  userID: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
