import Account from "./Account";
import Cart from "./Cart";

function UserPanel() {
	return (
		<div className="flex flex-shrink-0 flex-grow-0 gap-6">
			<Account />

			<Cart />
		</div>
	);
}

export default UserPanel;
