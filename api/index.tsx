/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';

import type { AxiosError } from 'axios';
import axios from 'axios';
import { cookies } from 'next/headers';

interface iUserLoginResponse {
  status?: string;
  token?: string;
  message?: string;
}

const apiUrl = process.env.API_URL;

const token = cookies().get('User-Token');

export const UserLogin = async (email: string, password: string): Promise<any> => {
  try {
    const response = await axios.post(`${apiUrl}/auth/login`, {
      email,
      password,
    });
    const responseData = response.data as iUserLoginResponse;
    if (responseData.status === 'success' && responseData.token) {
      cookies().set({
        name: 'User-Token',
        value: responseData.token,
        sameSite: 'strict',
      });
    } else if (responseData.message) {
      return responseData.message;
    }
    return responseData.status;
  } catch (e) {
    return;
  }
};

export const UserValidation = async (): Promise<any> => {
  try {
    const response = await axios.get(`${apiUrl}/users/me`, {
      headers: { Authorization: `Bearer ${token?.value}` },
    });
    return response.data;
  } catch (e) {
    const error = e as AxiosError;

    return error;
  }
};

/* export const UserLogout = async (): Promise<any> => {
  try {
    const response = await axios.get(`${apiUrl}/logout`);
    return response.data;
  } catch (e) {
    const error = e as AxiosError;

    return error;
  }
}; */

export const GetAllRecipes = async (): Promise<any> => {
  try {
    const response = await axios.get(`${apiUrl}/recipes`, {
      headers: { Authorization: `Bearer ${token?.value}` },
    });
    return response.data;
  } catch (e) {
    const error = e as AxiosError;

    return error;
  }
};

export const GetRecipeById = async (id: string): Promise<any> => {
  try {
    const response = await axios.get(`${apiUrl}/recipes/${id}`, {
      headers: { Authorization: `Bearer ${token?.value}` },
    });
    return response.data;
  } catch (e) {
    const error = e as AxiosError;

    return error;
  }
};

export const CreateRecipe = async (recipe: any): Promise<any> => {
  try {
    const response = await axios.post(`${apiUrl}/recipes`, recipe, {
      headers: { Authorization: `Bearer ${token?.value}` },
    });
    return response.data;
  } catch (e) {
    const error = e as AxiosError;

    return error;
  }
};

export const UpdateRecipe = async (id: string, recipe: any): Promise<any> => {
  try {
    const response = await axios.post(`${apiUrl}/recipes/${id}`, recipe, {
      headers: { Authorization: `Bearer ${token?.value}` },
    });
    return response.data;
  } catch (e) {
    const error = e as AxiosError;

    return error;
  }
};

export const DeleteRecipe = async (id: string): Promise<any> => {
  try {
    const response = await axios.delete(`${apiUrl}/recipes/${id}`, {
      headers: { Authorization: `Bearer ${token?.value}` },
    });
    return response.data;
  } catch (e) {
    const error = e as AxiosError;

    return error;
  }
};
