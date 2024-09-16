import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import type { IProduct } from "../../@types/index.types";


function Cart() {
	const { cart }: { cart: IProduct[] } = useContext(CartContext); 
	const navigate = useNavigate();

	const handleCartClick = () => {
		navigate("/cart/");
	};

	return (
		<button
			type="button"
			className="flex items-end relative"
			onClick={handleCartClick}
		>
			<p className="absolute top-0 left-[18px] text-brand-primary">
				{cart.length}
			</p>
			<img
				className="w-[38px] h-[34px]"
				src="/assets/icons/cart.svg"
				alt="cart icon"
			/>
			<p className="text-main-lowest">Panier</p>
		</button>
	);
}

export default Cart;
