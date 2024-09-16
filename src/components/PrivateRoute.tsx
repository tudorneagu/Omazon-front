import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ element }) {
	const { loged } = useContext(AuthContext);
	return loged ? element : <Navigate to="/401" />;
}

export default PrivateRoute;
