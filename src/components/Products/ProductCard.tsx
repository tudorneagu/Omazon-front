import Button from "../ui/Buttons/AddButton";
import Tag from "../Tags/Tags";
import type { IProduct } from "../../@types/index.types";
import FormatPrice from "../utils/FormatPrice";
import { Link, useNavigate } from "react-router-dom";

interface ProductCardProps {
	product: IProduct;
	showTag?: boolean;
}

function ProductCard({ product, showTag = true }: ProductCardProps) {
	const navigate = useNavigate();

	const handleProductsClick = () => {
		navigate(`/product/${product.title}`);
	};

	return (
		<div className="overflow-hidden relative border w-[330px] h-[518px] border-main-lower flex flex-col">
			<Link to={`/product/${product.title}`} onClick={handleProductsClick}>
				<div className="relative h-[330px] w-[330px] flex justify-center items-center bg-black/5">
					{showTag && product.tags !== null && (
						<div className="absolute top-0 left-2">
							<Tag tag={product.tags} />
						</div>
					)}
					<img
						className="h-[220px] w-auto object-contain -z-10"
						src={`/assets/products/${product?.image}`}
						alt={product?.title || "product"}
					/>
				</div>
			</Link>

			<div className="flex flex-col flex-grow justify-between p-3">
				<Link to={`/product/${product.title}`} onClick={handleProductsClick}>
					<h3 className="line-clamp-3 text-ellipsis">
						{product?.title || "Produit sans nom"}
					</h3>
				</Link>
				<div className="flex flex-col gap-2 mt-auto">
					<div>
						{product?.price ? (
							FormatPrice(product.price)
						) : (
							<p>Le prix n'est pas disponible</p>
						)}
					</div>
					<Button product={product} />
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
