import { useContext, useEffect } from 'react';

import { CartContext } from '../contexts/CartContext';
import CartProduct from '../components/Products/CartProduct';
import type { IProduct } from '../@types/index.types';
import Button from '../components/ui/Buttons/Button';

interface CartContextType {
  cart: IProduct[];
}

function CartPage() {
  const { cart } = useContext(CartContext) as CartContextType;
  const totalCartPrice = cart.reduce(
    (acc: number, product: IProduct) => acc + product.price * product.quantity,
    0,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex gap-4 my-10">
      <section className="flex-1 border border-main-low p-4 max-w-7xl">
        <header className="mb-4 border-b border-main-low flex justify-between items-end">
          {cart.length > 0 ? (
            <div>
              <h1 className="heading-m font-medium">Votre Panier</h1>
              <p className="text-sm text-info-medium cursor-pointer pb-3">
                Désélectionner tous les éléments
              </p>
            </div>
          ) : (
            <p className="heading-m font-medium ">
              Votre panier Amazon est vide.
            </p>
          )}
          <p>Prix</p>
        </header>
        <main className="flex flex-col gap-4">
          {cart.map((product: IProduct) => (
            <CartProduct product={product} key={product.id} />
          ))}
        </main>
        <footer className="flex justify-end gap-2 pt-2 pb-4">
          <h3 className="heading-s font-normal">
            Sous-total ({cart.length} article{cart.length > 1 && 's'} ):
          </h3>
          <p className="heading-s font-semibold">
            {totalCartPrice.toFixed(2)} €
          </p>
        </footer>
      </section>

      {cart.length > 0 ? (
        <section className="w-96 pb-10 border border-main-low p-4 flex flex-col h-min">
          {cart.length > 0 ? (
            <div className="flex  flex-col gap-3">
              <div className="flex  gap-2">
                <h3 className="text-m-regular">
                  Sous-total ({cart.length} article{cart.length > 1 && 's'}):
                </h3>
                <p className="heading-xl font-semibold">
                  {totalCartPrice.toFixed(2)} €
                </p>
              </div>
              <div className="mb-4 text-s-regular flex items-center">
                <input type="checkbox" name="gift" id="gift" className="mr-2" />
                <label htmlFor="gift">Commande contenant un cadeau</label>
              </div>
            </div>
          ) : (
            <p className="mb-4">Aucun article sélectionné</p>
          )}
          <Button type="button" content="Passer la commande" />
        </section>
      ) : (
        <section className="w-80 pb-10 p-4 flex flex-col h-min" />
      )}
    </div>
  );
}

export default CartPage;
