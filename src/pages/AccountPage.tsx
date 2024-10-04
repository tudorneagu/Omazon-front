import AccountOptions from "../components/ui/Cards/AccountOptions";
import { useNavigate } from "react-router-dom";

function AccountPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col w-full max-w-[940px]">
        <div className="flex flex-col items-start  py-6">
          <h1 className="mb-4 heading-m">Votre compte</h1>
          <div className="w-full flex flex-wrap gap-4 justify-start">
            <AccountOptions
              title="Votre profil"
              description="Modifier les informations de votre profil"
              icon="/assets/account/security.png"
              onClick={() => {
                navigate("");
              }}
            />
            <AccountOptions
              title="Vos produits"
              description="Consulter vos produits mise en vente sur notre site"
              icon="/assets/account/myproducts.png"
              onClick={() => navigate("/account/products")}
            />
            <AccountOptions
              title="Vos commandes"
              description="Suivre, etourner ou acheter à nouveau "
              icon="/assets/account/orders.png"
              onClick={() => navigate("/account/orders")}
            />
            <AccountOptions
              title="Adresses"
              description="Modifier vos adresses de livraison et de facturation"
              icon="/assets/account/adress.png"
              onClick={() => navigate("/account/adresses")}
            />

            <AccountOptions
              title="Vos paiements"
              description="Afficher toutes les transactionset gérer les modes de paiement"
              icon="/assets/account/payement.png"
              onClick={() => navigate("/account/payments")}
            />
            <AccountOptions
              title="Nous contacter"
              description="Contacter notre service client par telephone ou par chat"
              icon="/assets/account/contact.png"
              onClick={() => navigate("/account/contact")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
