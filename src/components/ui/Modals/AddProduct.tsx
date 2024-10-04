import { useContext, useState } from "react";

import { CartContext } from "../../../contexts/CartContext";
import { ProductContext } from "../../../contexts/ProductContext";
import Button from "../Buttons/Button";

import type { ITag } from "../../../@types/index.types";
import {
  AuthContext,
  type AuthContextType,
} from "../../../contexts/ModalContext";
import type { CartContextType } from "../../../contexts/CartContext";

function AddProduct() {
  const { closeModal } = useContext<AuthContextType>(AuthContext);
  const { addUserProduct, error, success } =
    useContext<CartContextType>(CartContext);
  const productContext = useContext(ProductContext);
  const categories = productContext?.categories;
  const tags = productContext?.tags;

  const user = localStorage.getItem("authData");
  const userId = user ? JSON.parse(user).user.id : null;
  const userAccountType = user ? JSON.parse(user).user.account_type : null;

  const [newProductData, setNewProductData] = useState({
    title: "",
    url: "",
    price: 0,
    description: "",
    inStock: true,
    category_id: 0,
    tag_id: 0,
    user_id: userId,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setNewProductData({
      ...newProductData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", newProductData);

    try {
      const data = await addUserProduct(newProductData);
      console.log("Product added:", data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 flex justify-center items-center bg-black/70 z-20 w-full h-full"
      onClick={() => closeModal("addProduct")}
      onKeyUp={(e) => e.key === "Enter" && closeModal("addProduct")} // Added keyboard event
    >
      {!user ? (
        <div className="flex max-w-2xl bg-white w-full p-10  justify-between rounded-lg items-center ">
          <p className="text-m-regular">
            Veuillez vous connecter avec votre compte entreprise
          </p>
          <img
            className="h-10 cursor-pointer"
            src="/assets/icons/close.svg"
            alt="close button"
            onClick={() => closeModal("addProduct")}
            onKeyUp={(e) => e.key === "Enter" && closeModal("addProduct")}
          />
        </div>
      ) : userAccountType !== "entreprise" ? (
        <div className="flex max-w-2xl bg-white w-full p-10  justify-between rounded-lg items-center ">
          <p className="text-m-regular">
            Vous pouvez rajouter des produits avec un compte Omazon entreprise
          </p>
          <img
            className="h-10 cursor-pointer"
            src="/assets/icons/close.svg"
            alt="close button"
            onClick={() => closeModal("addProduct")}
            onKeyUp={(e) => e.key === "Enter" && closeModal("addProduct")}
          />
        </div>
      ) : (
        <div
          className="max-w-2xl bg-white w-full rounded-lg "
          onClick={(e) => {
            e.preventDefault();
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter" && e instanceof KeyboardEvent) {
              e.preventDefault();
            }
          }}>
          <header className="bg-main-low flex items-center rounded-t-lg border-b-2 border-main-medium/40 justify-between py-4 px-6 ">
            <h1 className="text-lg font-bold">Ajouter un produit</h1>
            <img
              className="h-10 cursor-pointer"
              src="/assets/icons/close.svg"
              alt="close button"
              onClick={() => closeModal("addProduct")}
              onKeyUp={(e) => e.key === "Enter" && closeModal("addProduct")}
            />
          </header>
          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-3">
            <div className="flex flex-col">
              <label htmlFor="title" className="text-main-medium">
                Titre
              </label>
              <input
                className="border-2 rounded-md border-main-medium/40 focus:border-info-medium/40 focus:shadow-md invalid:border-danger-medium pl-2"
                type="text"
                name="title"
                placeholder="Mon super produit"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="image" className="text-main-medium">
                URL de la photo
              </label>
              <input
                className="border-2 rounded-md border-main-medium/40 focus:border-info-medium focus:shadow-md invalid:border-danger-medium pl-2"
                type="text"
                name="image"
                placeholder="https://a0.mouscache.com/im/pictures"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="description" className="text-main-medium">
                Desciption du produit
              </label>
              <textarea
                className="border-2 rounded-md border-main-medium/40 focus:border-info-medium focus:shadow-md invalid:border-danger-medium pl-2"
                rows={5}
                name="description"
                placeholder="La description du votre produit ..."
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="price" className="text-main-medium">
                Prix (en euros)
              </label>
              <input
                className="border-2 rounded-md border-main-medium/40 focus:border-info-medium focus:shadow-md invalid:border-danger-medium pl-2"
                type="text"
                name="price"
                placeholder="90.99"
                onChange={handleChange}
              />
            </div>
            <div>
              <p> Disponibilité</p>
              <label>
                <input
                  className="text-main-medium"
                  type="radio"
                  name="inStock"
                  value="true"
                />
                Disponible
              </label>
              <label>
                <input
                  className="text-main-medium"
                  type="radio"
                  name="inStock"
                  value="false"
                />
                En rupture de stock
              </label>
            </div>
            <div className="flex gap-4 w-full">
              <div className="flex flex-col basis-1/2">
                <label
                  htmlFor="category"
                  className="text-main-medium text-m-regular">
                  Catégorie
                </label>
                <select
                  onChange={handleChange}
                  name="category_id"
                  className="h-7 bg-main-lower text-s-regular text-brand-grey px-3">
                  <option selected disabled>
                    Choisissez une catégorie ...
                  </option>
                  {categories?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col basis-1/2">
                <label htmlFor="tag" className="text-main-medium">
                  Tag
                </label>
                <select
                  onChange={handleChange}
                  name="tag_id"
                  className="h-7 bg-main-lower text-s-regular text-brand-grey px-3">
                  <option selected disabled>
                    Choisissez un tag
                  </option>
                  {tags?.map((tag: ITag) => (
                    <option key={tag.id} value={tag.id}>
                      {tag.text}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {error && <p className="text-danger-medium">{error}</p>}
            {success && <p className="text-info-medium">{success}</p>}
            <Button type="submit" content="Ajouter le produit" />
          </form>
        </div>
      )}
    </div>
  );
}

export default AddProduct;
