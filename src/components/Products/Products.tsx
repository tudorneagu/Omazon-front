import ProductCard from "./ProductCard";
import type { IProduct } from "../../@types/index.types";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

function Products({ categoryTitle }) {
	const { products } = useContext(ProductContext);
	const filteredProducts = products.filter(
		(product: IProduct) => product.categories.title === categoryTitle,
	);

	return (
		<div className="flex flex-col gap-6">
			<h1 className="heading-m">{categoryTitle}</h1>
			<div className="flex gap-6 flex-wrap">
				{filteredProducts.length > 0 ? (
					filteredProducts.map((product: IProduct) => (
						<ProductCard key={product.id} product={product} showTag={true} />
					))
				) : (
					<p>No products are available in this category</p>
				)}
			</div>
		</div>
	);
}

export default Products;
