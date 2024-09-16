import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import type { IProduct } from "../../../@types/index.types";

interface AddButtonProps {
	product: IProduct;
}

function AddButton({ product }: AddButtonProps) {
	const cartContext = useContext(CartContext);

	const { handleAdd } = cartContext as {
		handleAdd: (product: IProduct) => void;
	};

	return (
		<button
			type="button"
			className="text-s-regular border bg-button-default-background border-button-default-border rounded-full hover:bg-button-hover-background hover:border-button-hover-border active:bg-button-active-background active:border-button-active-border py-1 px-4 w-fit"
			onClick={() => handleAdd(product)}
		>
			Ajouter au panier
		</button>
	);
}

export default AddButton;
