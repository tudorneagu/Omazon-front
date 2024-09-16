import { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductContext";
import type {ProductContextType} from '../../../contexts/ProductContext'

function SearchField() {
	const { setSearchQuery, searchInput } =
		useContext(ProductContext) as ProductContextType;
	const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	return (
		<input
			className="flex-grow px-3 text-m-regular text-main-highest placeholder:text-m-regular"
			type="text"
			placeholder="Recherche Omazon"
			onChange={handleSearchQuery}
			ref={searchInput}
		/>
	);
}

export default SearchField;
