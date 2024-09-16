import { useParams } from "react-router-dom";

import Products from "../components/Products/Products";

function ProductsPage() {
	const { categoryTitle } = useParams();

	return (
		<div className="flex flex-col gap-[72px] py-[48px] px-6">
			<Products categoryTitle={categoryTitle} />
		</div>
	);
}

export default ProductsPage;
