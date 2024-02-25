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

export interface iUserValidationResponse {
  data?: {
    user?: string;
    id?: string;
    name?: string;
    email?: string;
    role?: string;
    provider?: string;
    created_at?: string;
    updated_at?: string;
  };
  status?: string;
  message?: string;
}

export interface iRecipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  ingredients: string[];
  instructions: string[];
  image: string;
  chef: string;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export interface iAllRecipes {
  data?: iRecipe[];
  results?: number;
  message?: string;
  status?: string;
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
    } else {
      return;
    }
    return responseData.status;
  } catch (e) {
    return;
  }
};

export const UserValidation = async (): Promise<any> => {
  if (!cookies().has('User-Token')) {
    const noTokenResponse = {
      status: 'error',
      message: 'No token found',
    };
    return noTokenResponse;
  }
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
  if (!cookies().has('User-Token')) {
    const noTokenResponse = {
      status: 'error',
      message: 'No token found',
    };
    return noTokenResponse;
  }
  try {
    const response = await axios.get(`${apiUrl}/recipes`, {
      headers: { Authorization: `Bearer ${token?.value}` },
    });
    const responseData = response.data as iAllRecipes;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error;
  }
};

export const GetRecipeById = async (id: string): Promise<any> => {
  if (!cookies().has('User-Token')) {
    const noTokenResponse = {
      status: 'error',
      message: 'No token found',
    };
    return noTokenResponse;
  }
  try {
    const response = await axios.get(`${apiUrl}/recipes/${id}`, {
      headers: { Authorization: `Bearer ${token?.value}` },
    });
    const responseData = response.data as iAllRecipes;
    return responseData;
  } catch (e) {
    const error = e as AxiosError;
    return error;
  }
};

export const CreateRecipe = async (recipe: any): Promise<any> => {
  if (!token) {
    const noTokenResponse = {
      status: 'error',
      message: 'No token found',
    };
    return noTokenResponse;
  }
  try {
    const response = await axios.post(`${apiUrl}/recipes`, recipe, {
      headers: { Authorization: `Bearer ${token.value}` },
    });
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    return error;
  }
};

export const UpdateRecipe = async (id: string, recipe: any): Promise<any> => {
  if (!cookies().has('User-Token')) {
    const noTokenResponse = {
      status: 'error',
      message: 'No token found',
    };
    return noTokenResponse;
  }
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
  if (!token) {
    const noTokenResponse = {
      status: 'error',
      message: 'No token found',
    };
    return noTokenResponse;
  }
  try {
    const response = await axios.delete(`${apiUrl}/recipes/${id}`, {
      headers: { Authorization: `Bearer ${token.value}` },
    });
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    return error;
  }
};
