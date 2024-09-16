import { ModalContext } from "../contexts/ModalContext";
import { useContext } from "react";
import { useEffect } from "react";
function Page401() {
	const { openModal } = useContext(ModalContext);
	useEffect(() => {
		openModal("login");
	}, [openModal]); 
	return (
		<div className="min-h-[400px] bg-white">
			<h1 className="heading-m"> Error 401</h1>
			<p>Vous n'avez pas les droits d'acceder à cette page</p>
			<p>Veuillez vous connecter avant de reesayer</p>
		</div>
	);
}

export default Page401;
