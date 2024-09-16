import { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductContext";

import SearchCategory from "./SearchCategory";
import SearchField from "./SearchField";
import SearchButton from "../../ui/Buttons/SearchButton";
import SearchResults from "./SearchResults";

function SearchBar() {
	const { searchQuery } = useContext(ProductContext) || { searchQuery: "" }; 
	return (
		<form className="flex-grow flex h-9 ">
			<SearchCategory />
			<div className="flex flex-col h-9 relative w-full">
				<SearchField />
				{searchQuery && <SearchResults />}
			</div>
			<SearchButton />
		</form>
	);
}

export default SearchBar;
