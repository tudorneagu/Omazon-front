import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductProvider } from "./contexts/ProductContext.tsx";
import { ModalProvider } from "./contexts/ModalContext.tsx";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
	<>
		<BrowserRouter>
			<ProductProvider>
				<AuthProvider>
					<ModalProvider>
						<CartProvider>
							<UserProvider>
								<App />
							</UserProvider>
						</CartProvider>
					</ModalProvider>
				</AuthProvider>
			</ProductProvider>
		</BrowserRouter>
	</>,
);
