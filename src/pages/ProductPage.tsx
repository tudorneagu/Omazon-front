import DOMPurify from 'dompurify';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddButton from '../components/ui/Buttons/AddButton';
import FormatPrice from '../components/utils/FormatPrice';
import { ProductContext } from '../contexts/ProductContext';

function ProductPage() {
  const { products } = useContext(ProductContext);
  const { productTitle } = useParams();

  const product = products.find((product) => product.title === productTitle);
  const sanitizedDescription = DOMPurify.sanitize(product?.description);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(product);
  if (!product) {
    return <p>Erreur, le produit n'a pas été trouvé </p>;
  }

  return (
    <div className="p-6 flex gap-12">
      <div className="h-[330px] min-w-[330px] flex justify-center items-center bg-black/5">
        <img
          className="h-[330px] min-w-[330px] object-contain -z-10"
          src={`/assets/products/${product?.image}`}
          alt={product?.title || 'product'}
        />
      </div>
      <div className=" flex flex-col gap-4">
        <h1 className="border-b-2 heading-s">{product.title}</h1>
        <div className="flex flex-col gap-2">
          <div>
            {product?.price ? (
              FormatPrice(product.price)
            ) : (
              <p>Le prix n'est pas disponible</p>
            )}
          </div>
          <AddButton product={product} />
        </div>
        {product.description && (
          <p
            className="text-m-regular "
            dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
          />
        )}
      </div>
    </div>
  );
}

export default ProductPage;
