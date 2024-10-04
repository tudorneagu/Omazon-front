import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from "./contexts/ModalContext";
import { AuthContext } from "./contexts/AuthContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import LoginForm from "./components/ui/Modals/LoginForm";
import AddProduct from "./components/ui/Modals/AddProduct";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import RegisterPage from "./pages/RegisterPage";
import AccountPage from "./pages/AccountPage";
import AccountProducts from "./pages/AccountProducts";

import AccountDetails from "./components/ui/Modals/AcountDetails";
import Page401 from "./pages/Page401";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const { modals } = useContext(ModalContext);
  const { loged } = useContext(AuthContext);
  return (
    <div
      className="flex flex-col justify-between
		 min-h-screen">
      <Header />
      <main className="flex justify-center">
        <div className="max-w-[1600px] w-full h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/category/:categoryTitle/products"
              element={<CategoryPage />}
            />
            <Route path="/product/:productTitle" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/accountDetails"
              element={<PrivateRoute element={<AccountPage />} />}
            />
            <Route
              path="/account/details"
              element={<PrivateRoute element={<AccountDetails />} />}
            />
            <Route
              path="/account/products"
              element={<PrivateRoute element={<AccountProducts />} />}
            />
            <Route path="401" element={<Page401 />} />
          </Routes>
        </div>
      </main>
      <Footer />
      {modals.addProduct && <AddProduct />}
      {modals.login && !loged && <LoginForm />}
      {modals.accountDetails && loged && <AccountDetails />}
    </div>
  );
}

export default App;
