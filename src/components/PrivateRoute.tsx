import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

function PrivateRoute({ element }: { element: ReactNode }) {
  const { loged } = useContext(AuthContext) as { loged: boolean };
  return loged ? element : <Navigate to="/401" />;
}

export default PrivateRoute;
