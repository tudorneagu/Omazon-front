import { useState, useRef, useEffect, createContext } from "react";

import type { ICategory, IProduct, ITag } from "../@types/index.types";
import productService from "../services/productService";
import { fetchCategories } from "../services/categoryService";
import { fetchTags } from "../services/tagService";

export interface Category {
  id: number;
  title: string;
}

interface ProductContextType {
  products: IProduct[];
  categories: ICategory[];
  tags: ITag[];
  searchQuery: string | null;
  setSearchQuery: React.Dispatch<React.SetStateAction<string | null>>;
  searchInput: React.RefObject<HTMLInputElement>;
}

const defaultProductContextValue: ProductContextType = {
  products: [],
  categories: [],
  tags: [],
  searchQuery: "",
  setSearchQuery: () => {},
  searchInput: { current: null },
};

const ProductContext = createContext<ProductContextType>(
  defaultProductContextValue
);

function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [tags, setTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState<string | null>("");
  const searchInput = useRef(null);

  useEffect(() => {
    const getProducts = async () => {
      const data = await productService.getAllProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const data: ICategory[] = await fetchCategories();
      setCategories(data);
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getTags = async () => {
      const data = await fetchTags();
      setTags(data);
    };
    getTags();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products: products as IProduct[],
        categories: categories as ICategory[],
        tags: tags as ITag[],
        searchQuery: searchQuery,
        setSearchQuery: setSearchQuery,
        searchInput: searchInput,
      }}>
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext };
