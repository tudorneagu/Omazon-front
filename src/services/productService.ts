import axios from "axios";
import type { IProduct } from "../@types/index.types";

const APP_API_URL = "http://localhost:3000";

const axiosInstance = axios.create({ baseURL: APP_API_URL });

const productService = {
	getAllProducts: async (): Promise<IProduct[]> => {
		try {
			const products = await axiosInstance.get<IProduct[]>("/products");
			return products.data;
		} catch (error) {
			console.error("Error fetching products:", error);
			throw error;
		}
	},

	getUserProducts: async (userId: number) => {
		try {
			const userProducts = await axiosInstance.get(`/userProducts/${userId}`);
			return userProducts.data;
		} catch (error) {
			console.error("Error fetching user products", error);
			throw error;
		}
	},

	deleteUserProduct: async (userId: number, productId: number) => {
		try {
			console.log(userId, productId);
			const deletedProduct = await axiosInstance.delete(
				`/userProducts/${userId}/${productId}`,
			);
			return deletedProduct.data;
		} catch (error) {
			console.error("Cannot delete product", error);
			throw error;
		}
	},
};

export default productService;
