import Categories from "../components/Catégories/Categories";
import NewProducts from "../components/Nouveautés/NewProducts";
import AllProducts from "../components/Products/AllProducts";

function Home() {
	return (
		<div className="flex flex-col gap-[72px] py-[48px] z-10 px-6">
			<Categories />
			<NewProducts />
			<AllProducts />
		</div>
	);
}

export default Home;
