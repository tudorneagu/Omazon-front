import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import type { IProduct } from "../../../@types/index.types";

function UserProductCard({ product }: { product: IProduct }) {
  const navigate = useNavigate();

  const handleProductsClick = () => {
    navigate(`/product/${product.title}`);
  };
  const { handleRemoveUserProduct } = useContext(UserContext);
  const productId = product.id;
  console.log(productId);
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
      <section className="flex flex-col justify-between">
        <article className="">
          <Link to={`/product/${product.title}`} onClick={handleProductsClick}>
            <h3 className="line-clamp-2 text-ellipsis">
              {product?.title || "Produit sans nom"}
            </h3>
          </Link>
          <div className="flex text-s-regular overflow-hidden">
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
        </article>
        <article className="flex text-s-regular text-info-medium">
          <button
            type="button"
            onClick={() => handleRemoveUserProduct(Number(productId))}>
            Supprimer le produit
          </button>
          <button
            type="button"
            className="border-l border-main-low pl-4 ml-4"
            // onClick={() => handleRemove(product)}
          >
            Modifier le produit
          </button>
        </article>
      </section>
      <section className="min-w-fit ml-auto">
        <p>{Number(product.price).toFixed(2)} €</p>
      </section>
    </div>
  );
}

export default UserProductCard;
