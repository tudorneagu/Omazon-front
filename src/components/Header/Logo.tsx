import { Link } from "react-router-dom";
function Logo() {
	return (
		<Link className="flex-shrink-0" to={"/"}>
			<img
				className="w-[105px] h-[32px] "
				src="/assets/logos/omazon.svg"
				alt="logo omazon"
			/>
		</Link>
	);
}

export default Logo;
