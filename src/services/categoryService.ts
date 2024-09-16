import axios from "axios";
import type { ICategory } from "../@types/index.types";

const APP_API_URL = "https://omazon-backend.onrender.com";

const axiosInstance = axios.create({ baseURL: APP_API_URL });

export const fetchCategories = async (): Promise<ICategory[]> => {
  try {
    const categories = await axiosInstance.get("/categories");
    return categories.data;
  } catch (error) {
    console.error("Error fetching categories", error);
    throw error;
  }
};
