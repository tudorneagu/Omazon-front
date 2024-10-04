import { useContext, useEffect } from "react";
import UserProductCard from "../components/ui/Cards/UserProductCard";
import type { IProduct } from "../@types/index.types";
import Button from "../components/ui/Buttons/Button";
import { UserContext } from "../contexts/UserContext";
import { ModalContext } from "../contexts/ModalContext";

function AccountProducts() {
  const { openModal } = useContext(ModalContext);
  const { products } = useContext(UserContext);
  console.log(products);

  console.log(products);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex gap-4 my-10">
      <section className="flex-1 border border-main-low p-4 max-w-7xl">
        <header className="mb-4 border-b border-main-low flex justify-between items-end pb-4">
          {products.length > 0 ? (
            <div className="flex flex-col justify-between w-full">
              <h1 className="heading-m font-medium">Vos produits en vente</h1>
              <Button
                width="w-fit"
                content="Mettre un nouveau produit en vente"
                onClick={() => openModal("addProduct")}
              />
            </div>
          ) : (
            <div>
              <p className="heading-m font-medium">
                Vous n'avez pas de produits en vente
              </p>
              <Button
                width="w-fit"
                content="Mettre un nouveau produit en vente"
                onClick={() => openModal("addProduct")}
              />
            </div>
          )}

          <p>Prix</p>
        </header>
        <main className="flex flex-col gap-4">
          {products.map((product: IProduct) => (
            <UserProductCard product={product} key={product.id} />
          ))}
        </main>
        <footer className="flex justify-end gap-2 pt-2 pb-4" />
      </section>
    </div>
  );
}

export default AccountProducts;
