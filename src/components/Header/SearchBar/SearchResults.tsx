import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductContext";
import normalizeString from "../../utils/NormaliseString";
import type { IProduct } from "../../../@types/index.types";
import type {ProductContextType} from '../../../contexts/ProductContext'
function SearchResults() {
	const { searchQuery, products, setSearchQuery, searchInput } =
		useContext<ProductContextType>(ProductContext);
	console.log(searchQuery);
	const searchResults: IProduct[] = (() => {
		const normalizedQuery = normalizeString(searchQuery || ""); 
		if (searchQuery) {
			return (
				products?.filter((product: IProduct) =>
					normalizeString(product.title)?.includes(normalizedQuery),
				) || []
			);
		}
		return [];
	})();

	function handleClick() {
		setSearchQuery("");
		if (searchInput.current) {
			searchInput.current.value = "";
		}
	}

	return (
		<div>
			{searchResults.length > 0 && (
				<div className="absolute  w-full border border-main-lightest top-9 z-10 bg-main-lowest h-fit overflow-y-auto p-2">
					{searchResults.slice(0, 6).map((product: IProduct) => (
						<Link
							to={`/product/${product.title}`}
							className="text-m-regular line-clamp-1 text-ellipsis"
							key={product.id}
							onClick={handleClick}
						>
							{product.title}
						</Link>
					))}
				</div>
			)}
		</div>
	);
}

export default SearchResults;
