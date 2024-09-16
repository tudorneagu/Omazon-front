import axios from "axios";
import type { AxiosError } from "axios";

const APP_API_URL = "https://omazon-backend.onrender.com";
const axiosInstance = axios.create({ baseURL: APP_API_URL });

// je veux faire une demande API pour recuperer les produits de l'utilisateur
// je veux pouvoir rajouter un produit
// je veux pouvoir supprimer un produit
// je  veux pouvoir modifier un produit

const cartService = {
  addUserProductService: async (productData: {
    title: string;
    price: number;
    image: string;
    description: string;
    inStock: boolean;
    category_id: number;
    tag_id: number;
    user_id: number;
  }) => {
    try {
      const response = await axiosInstance.post("/product/add", productData, {
        withCredentials: true,
      });
      return response.data;
    } catch (err: unknown) {
      const error = err as AxiosError;
      console.error("Error in addUserProductService:", error.response || error);
      throw error;
    }
  },
};

export default cartService;
