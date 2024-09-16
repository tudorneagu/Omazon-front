import { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductContext";
import { Link, useNavigate } from "react-router-dom";

interface Category {
	id: number;
	title: string;
}

interface ProductContextType {
	categories: Category[];
}

function SearchCategory() {
	const { categories } = useContext<ProductContextType>(ProductContext);
	const navigate = useNavigate();
	const handleCategoryClick = (category: Category) => {
		navigate(`/category/${category.title}/products`);
	};

	return (
		<select
			defaultValue=""
			className=" bg-main-lower text-s-regular text-brand-grey px-3 rounded-l-lg"
		>
			<option value="" disabled>
				Toutes nos catégories
			</option>

			{categories.map((category: Category) => (
				<option key={category.id} value={category.id}>
					{category.title}
				</option>
			))}
		</select>
	);
}

export default SearchCategory;
