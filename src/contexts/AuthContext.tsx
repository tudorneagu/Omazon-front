import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import cartService from "../services/cartService";
import type { NewProductData, RegisterFormData } from "../@types/cart.types";
import type { AuthData } from "../@types/account.types";

export type AuthContextType = {
    registerUser: (formData: RegisterFormData) => Promise<{ field: string; } | undefined>;
    loginUser: (email: string, password: string) => Promise<void>;
    logoutUser: () => Promise<void>;
    loged: boolean;
    authData: AuthData[];
    error?: string; 
    success: string;
    addUserProduct: (newProductData: NewProductData) => Promise<void>;
    focusEmailInput: () => void;
} | null;

const AuthContext = createContext<AuthContextType>(); 

const AuthProvider = ({ children }) => { 
  const [loginForm, setLoginForm] = useState(true);
  const [loged, setLoged] = useState(false);
  const [authData, setAuthData] = useState<AuthData[]>([]); 
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await authService.checkAuth();
        if (response) {
          const storedAuthData = localStorage.getItem("authData");
          if (storedAuthData) setAuthData(JSON.parse(storedAuthData));
          setLoged(true);
        }
      } catch (error) {
        console.log("Authentication check failed:", error);
        setAuthData([]);
        setLoged(false);
        localStorage.removeItem("authData");
      }
    };
    checkAuth();
  }, []);

  const registerUser = async (formData: RegisterFormData) => {
    const {
      firstname,
      lastname,
      email,
      password,
      passwordConfirm,
      account_type,
    } = formData;
    setError("");
    setSuccess("");
    try {
      if (password.length < 6) {
        setError("Le mot de passe doit comporter au moins 6 caractères.");
        return { field: "password" };
      }
      if (password !== passwordConfirm) {
        setError("Les mots de passe ne correspondent pas.");
        return { field: "password" };
      }

      const newUserData = await authService.register({
        firstname,
        lastname,
        email,
        password,
        account_type,
      });

      setAuthData(newUserData);
      setLoged(true);
      localStorage.setItem("authData", JSON.stringify(newUserData));
      setSuccess("User created successfully!");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError("An unexpected error occurred.");
      } else if (error && (error as { response?: { status?: number } }).response?.status === 400) {
        setError("Un compte avec cet email existe déjà..");
        return { field: "email" };
      }
    }
  };

  const loginUser = async (email: string, password: string) => {
    setError("");
    try {
      const userData = await authService.login(email, password);
      console.log("User data received:", userData);
      setAuthData(userData);
      console.log(userData);
      localStorage.setItem("authData", JSON.stringify(userData));

      setLoginForm(false);
      setLoged(true);
      navigate("/");
    } catch (error) {
      setError("Email or password incorrect. Please try again.");
    }
  };

  const logoutUser = async () => {
    setError("");
    try {
      await authService.logout();
      setAuthData([]); 
      localStorage.removeItem("authData");
      setLoged(false);
      navigate("/");
    } catch (error) {
      setError("Logout failed. Please try again.");
    }
  };

  const addUserProduct = async (newProductData: NewProductData) => {
    const {
      title,
      url,
      price,
      category_id,
      tag_id,
      inStock,
      description,
      user_id,
    } = newProductData;
    setError("");
    setSuccess("");
    try {
      const validations = [
        { field: title, message: "Veuillez renseigner le titre du produit" },
        { field: url, message: "Veuillez rajouter une image de votre produit" },
        { field: price, message: "Veuillez préciser le prix de votre produit" },
        {
          field: description,
          message: "Veuillez rajouter une petite description à votre produit",
        },
        {
          field: inStock,
          message: "Veuillez préciser la disponibilité de votre produit",
        },
        { field: category_id, message: "Veuillez préciser le type de produit" },
      ];
      for (const validation of validations) {
        if (!validation.field) {
          return setError(validation.message);
        }
      }
      await cartService.addUserProductService({
        title,
        url,
        description,
        price,
        category_id,
        tag_id: tag_id ?? 0, 
        user_id,
        inStock,
      });
      setSuccess("Votre produit a été rajouté au catalogue Omazon");
    } catch (error) {
      setError("Le produit n'a pas pu etre enregistré");
    }
  };

  const focusEmailInput = () => { };

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        loginUser,
        logoutUser,
        loged,
        authData,
        error,
        success,
        addUserProduct,
        focusEmailInput,
      }}>
      {children}
    </AuthContext.Provider>
  );

}
export { AuthProvider, AuthContext };