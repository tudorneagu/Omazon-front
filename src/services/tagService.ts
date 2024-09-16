import axios from "axios";


const API_BASE_URL = "https://omazon-backend.onrender.com";

const axiosInstance = axios.create({ baseURL: API_BASE_URL });

export const fetchTags = async () => {
  try {
    const tags = await axiosInstance.get("/tags");
    return tags.data;
  } catch (error) {
    console.error("Error fetching categories", error);
    throw error;
  }
};
