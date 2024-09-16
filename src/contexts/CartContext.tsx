import { createContext, useEffect, useState } from "react";
import type { IProduct } from "../@types/index.types";
import cartService from "../services/cartService";

const CartContext = createContext();

function CartProvider({ children }: { children: React.ReactNode }) {
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [cart, setCart] = useState<IProduct[]>(
		JSON.parse(localStorage.getItem("cart") || "[]"),
	);

	//cart

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);
	const updateQuantityProduct = (id: number, quantity: number) => {
		setCart((prevCart) =>
			prevCart.map((item) => (item.id === id ? { ...item, quantity } : item)),
		);
	};

	useEffect(() => {
		if (cart.length > 0) {
			document.title = `Omazon - panier : ${cart.length} produits`;
		} else document.title = "Omazon ";
	}, [cart]);

	const handleAdd = (product: IProduct) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((item) => item.id === product.id);
			if (existingItem) {
				return prevCart.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item,
				);
			}
			return [...prevCart, { ...product, quantity: 1 }];
		});
	};

	const handleRemove = (product: IProduct) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((item) => item.id === product.id);
			if (existingItem) {
				if (existingItem.quantity === 1) {
					return prevCart.filter((item) => item.id !== product.id);
				}
				return prevCart.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity - 1 }
						: item,
				);
			}
			return prevCart;
		});
	};

	// User product management

	interface NewProductData {
		title: string;
		image: string;
		price: number;
		category_id: number;
		tag_id?: number;
		inStock: boolean;
		description: string;
		user_id: number;
	}

	const addUserProduct = async (newProductData: NewProductData) => {
		const {
			title,
			image,
			price,
			category_id,
			tag_id,
			inStock,
			description,
			user_id,
		} = newProductData;
		setError("");
		setSuccess("");
		try {
			const validations = [
				{ field: title, message: "Veuillez renseigner le titre du produit" },
				{
					field: image,
					message: "Veuillez rajouter une image de votre produit",
				},
				{ field: price, message: "Veuillez préciser le prix de votre produit" },
				{
					field: description,
					message: "Veuillez rajouter une petite description à votre produit",
				},
				{
					field: inStock,
					message: "Veuillez préciser la disponibilité de votre produit",
				},
				{ field: category_id, message: "Veuillez préciser le type de produit" },
			];
			for (const validation of validations) {
				if (!validation.field) {
					return setError(validation.message);
				}
			}
			const newProduct = await cartService.addUserProductService({
				title,
				image,
				price,
				category_id,
				tag_id,
				user_id,
				inStock,
			});
			setSuccess("Votre produit a été rajouté au catalogue Omazon");
		} catch (error) {
			setError("Le produit n'a pas pu etre enregistré");
		}
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				updateQuantityProduct,
				handleAdd,
				handleRemove,
				addUserProduct,
				success,
				error,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export { CartProvider, CartContext };
