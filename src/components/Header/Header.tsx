import { useEffect } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar/SearchBar";
import UserPanel from "./UserPanel";

function Header() {
	useEffect(() => {
		const handleScroll = () => {
			const header = document.querySelector("header");
			if (window.scrollY > 0) {
				header.classList.add("dropShadow");
			} else {
				header.classList.remove("dropShadow");
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<header className=" sticky top-0 bg-main-higher py-5 px-6 flex justify-between gap-9 w-screen z-30">
			<Logo />
			<SearchBar />
			<UserPanel />
		</header>
	);
}

export default Header;
