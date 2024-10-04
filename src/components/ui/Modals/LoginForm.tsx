import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext, useState } from "react";
import { ModalContext } from "../../../contexts/ModalContext";

function LoginForm() {
  const { loginUser, error } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { closeModal } = useContext(ModalContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <div
      className="fixed inset-0 z-50 "
      onClick={() => closeModal("login")}
      onKeyUp={() => closeModal("login")}>
      <div
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === "Enter") e.stopPropagation();
        }}
        className="absolute  top-16 right-2
          bg-white drop-shadow-md rounded-sm border border-main-lower max-w-screen-sm p-6 flex flex-col items-center">
        <div className="absolute z-10 -top-2 left-1/2 bg-main-lowest rotate-45 h-4 w-4 transform -translate-x-1/2" />

        <form
          className="w-[500px] flex flex-col items-center gap-6"
          onSubmit={handleSubmit}>
          <label className="flex flex-col gap-3 w-[216px]">
            Adresse e-mail
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // ref={emailRef}
              placeholder="nicole.martin@mail.fr"
              className="border p-2 rounded-lg border-brand-grey text-brand-grey text-m-regular"
            />
          </label>

          <label className="flex flex-col gap-3 w-[216px]">
            Mot de passe
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="border p-2 rounded-lg border-brand-grey text-brand-grey text-m-regular"
            />
          </label>
          <div>
            <Button type="submit" content="Identifiez-vous" px="px-16" />

            {error && <p className="text-red-500 ptext-xs">{error}</p>}
          </div>
        </form>
        <div className="text-xs-regular flex gap-1 mt-4">
          <p>Nouveau client?</p>{" "}
          <Link
            to="/register"
            className="text-info-medium active:text-info-higher active:font-semibold hover:text-button-active-background">
            Commencer ici
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
