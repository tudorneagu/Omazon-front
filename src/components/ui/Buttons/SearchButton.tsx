function SearchButton() {
	return (
		<button
			type="button"
			className="w-fit p-2 flex-shrink-0 bg-brand-primary rounded-r-lg flex justify-center items-center"
		>
			<img
				className="h-5 w-6"
				src="/assets/icons/search.svg"
				alt="search button"
			/>
		</button>
	);
}

export default SearchButton;
