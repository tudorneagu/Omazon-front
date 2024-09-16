import axios from 'axios';

const APP_API_URL = 'http://localhost:3000';
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
      const response = await axiosInstance.post('/product/add', productData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error('Error in addUserProductService:', error.response || error);
      throw error;
    }
  },
};

export default cartService;
