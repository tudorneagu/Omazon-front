import { useState, useEffect, createContext } from "react";
import productService from "../services/productService";

const UserContext = createContext(undefined);

interface UserProviderProps {
	children: React.ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
	const [userProducts, setUserProducts] = useState([]);

	useEffect(() => {
		const getAllUserProducts = async () => {
			const authData = localStorage.getItem("authData");

			if (authData) {
				const parsedAuthData = JSON.parse(authData);
				const userId = parsedAuthData.user.id;
				try {
					const data = await productService.getUserProducts(userId);
					setUserProducts(data);
					console.log(userId);
				} catch (error) {
					console.error("Error fetching user products:", error);
				}
			} else {
				console.error("No authData found in localStorage.");
			}
		};

		getAllUserProducts();
	}, []);

	const handleRemoveUserProduct = async (productId) => {
		const authData = localStorage.getItem("authData");
		console.log(productId);
		if (authData) {
			const parsedAuthData = JSON.parse(authData);
			const userId = parsedAuthData.user.id;
			console.log(userId);
			try {
				const data = await productService.deleteUserProduct(userId, productId);
				setUserProducts((prevProducts) =>
					prevProducts.filter((product) => product.id !== productId),
				);
				console.log(`Product ${productId} removed successfully.`);
			} catch (error) {
				console.error("Error removing product:", error);
			}
		} else {
			console.error("No authData found in localStorage.");
		}
	};

	return (
		<UserContext.Provider value={{ userProducts, handleRemoveUserProduct }}>
			{children}
		</UserContext.Provider>
	);
}

export { UserProvider, UserContext };
