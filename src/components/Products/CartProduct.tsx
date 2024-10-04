import Tag from "../Tags/Tags";
import type { IProduct } from "../../@types/index.types";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import type { CartContextType } from "../../@types/index.types";

interface CartProductProps {
  product: IProduct;
  showTag?: boolean;
}

function CartProduct({ product, showTag = true }: CartProductProps) {
  const { handleRemove, updateQuantityProduct } = useContext(
    CartContext
  ) as CartContextType;
  const navigate = useNavigate();

  const handleProductsClick = () => {
    navigate(`/product/${product.title}`);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = Number.parseInt(e.target.value, 10);
    updateQuantityProduct(product.id, newQuantity);
  };
  return (
    <div className="overflow-hidden flex py-4 pl-4 gap-4 border-b border-main-low">
      <input type="checkbox" />
      <Link to={`/product/${product.title}`} onClick={handleProductsClick}>
        <div className="h-[220px] w-[220px] flex flex-shrink justify-center items-center bg-black/5">
          <img
            className="h-[110px] w-auto object-contain -z-10"
            src={`/assets/products/${product?.image}`}
            alt={product?.title || "product"}
          />
        </div>
      </Link>
      <section className="">
        <header className="">
          <Link to={`/product/${product.title}`} onClick={handleProductsClick}>
            <h3 className="line-clamp-2 text-ellipsis">
              {product?.title || "Produit sans nom"}
            </h3>
          </Link>
          <div className="flex text-s-regular overflow-hidden">
            {showTag && product.tags ? <Tag tag={product.tags} /> : ""}

            <p>dans la Categorie </p>
            <p className="text-info-high pl-4">{product.categories.title}</p>
          </div>
          {product.inStock ? (
            <p className="text-green-600 text-s-regular">En Stock</p>
          ) : (
            <p className="text-danger-medium text-s-regular">
              En rupture de stock
            </p>
          )}
        </header>
        <main className="text-s-regular ">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="gift-product" />
            <label htmlFor="gift-product">Ceci sera un cadeau</label>
          </div>
          <p>En savoir plus</p>
        </main>
        <footer className="flex text-s-regular text-info-medium">
          <select
            className="mr-4"
            value={product.quantity}
            onChange={handleQuantityChange}>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="border-l border-main-low pl-4 ml-4"
            onClick={() => handleRemove(product)}>
            Supprimer
          </button>
          <p className="border-l border-main-low pl-4 ml-4">Mettre de côté</p>
          <p className="border-l border-main-low pl-4 ml-4">
            Voir plus de produits similaires
          </p>
          <p className="border-l border-main-low pl-4 ml-4">Partager</p>
        </footer>
      </section>
      <section className="min-w-fit ml-auto">
        <p>{Number(product.price).toFixed(2)} €</p>
      </section>
    </div>
  );
}

export default CartProduct;
