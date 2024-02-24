/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import type { AxiosError } from 'axios';
import axios from 'axios';

const apiUrl = process.env.API_URL;

export const UserLogin = async (email: string, password: string): Promise<any> => {
  try {
    const response = await axios.post(`${apiUrl}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (e) {
    const error = e as AxiosError;

    return error;
  }
};

export const UserLogout = async (): Promise<any> => {
  try {
    const response = await axios.get(`${apiUrl}/logout`);
    return response.data;
  } catch (e) {
    const error = e as AxiosError;

    return error;
  }
};

export const UserValidation = async (): Promise<any> => {
  try {
    const response = await axios.get(`${apiUrl}/users/me`);
    return response.data;
  } catch (e) {
    const error = e as AxiosError;

    return error;
  }
};

export const GetAllRecipes = async (): Promise<any> => {
  try {
    const response = await axios.get(`${apiUrl}/recipes`);
    return response.data;
  } catch (e) {
    const error = e as AxiosError;

    return error;
  }
};

export const GetRecipeById = async (id: string): Promise<any> => {
  try {
    const response = await axios.get(`${apiUrl}/recipes/${id}`);
    return response.data;
  } catch (e) {
    const error = e as AxiosError;

    return error;
  }
};

export const CreateRecipe = async (recipe: any): Promise<any> => {
  try {
    const response = await axios.post(`${apiUrl}/recipes`, recipe);
    return response.data;
  } catch (e) {
    const error = e as AxiosError;

    return error;
  }
};

export const UpdateRecipe = async (id: string, recipe: any): Promise<any> => {
  try {
    const response = await axios.post(`${apiUrl}/recipes/${id}`, recipe);
    return response.data;
  } catch (e) {
    const error = e as AxiosError;

    return error;
  }
};

export const DeleteRecipe = async (id: string): Promise<any> => {
  try {
    const response = await axios.delete(`${apiUrl}/recipes/${id}`);
    return response.data;
  } catch (e) {
    const error = e as AxiosError;

    return error;
  }
};
