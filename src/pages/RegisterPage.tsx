import Button from '../components/ui/Buttons/Button';
import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';
import { AuthContext } from '../contexts/AuthContext';
import { useState } from 'react';
import type { AuthContextType } from '../types/AuthContextTypes'; 

function RegisterPage() {
  const { registerUser, error, success } = useContext(AuthContext) as AuthContextType;
  const { openModal } = useContext(ModalContext);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirm: '',
    account_type: 'private',
  });
  const [errorField, setErrorField] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await registerUser(formData);
    if (result && result.field) {
      setErrorField(result.field);
    } else {
      setErrorField('');
    }
    console.log(formData);
  };

  return (
    <div className="flex justify-center py-9 ">
      <section className="flex flex-col border gap-4 rounded-md p-5 max-w-sm">
        <article>
          <h1 className="heading-m">Créer un compte </h1>
        </article>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="firstname" className="text-main-medium text-s-bold">
              Prénom
            </label>
            <input
              className="border rounded-sm border-main-medium/40 text-s-regular focus:border-info-medium/40 focus:shadow-md invalid:border-danger-medium pl-2"
              type="text"
              name="firstname"
              placeholder="Théo"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname" className="text-main-medium text-s-bold">
              Nom
            </label>
            <input
              className="border rounded-sm border-main-medium/40 text-s-regular focus:border-info-medium/40 focus:shadow-md invalid:border-danger-medium pl-2"
              type="text"
              name="lastname"
              placeholder="Boulanger"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-main-medium text-s-bold">
              Email
            </label>
            <input
              className={`border rounded-sm border-main-medium/40 text-s-regular focus:border-info-medium/40 focus:shadow-md ${
                errorField === 'email'
                  ? 'border-danger-medium'
                  : 'border-main-medium/40'
              } pl-2`}
              type="email"
              name="email"
              placeholder="email@exemple.io"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-main-medium text-s-bold">
              Mot de passe
            </label>
            <input
              className={`border rounded-sm border-main-medium/40 text-s-regular focus:border-info-medium/40 focus:shadow-md ${
                errorField === 'password'
                  ? 'border-danger-medium'
                  : 'border-main-medium/40'
              } pl-2`}
              type="password"
              name="password"
              placeholder="Au moins 6 caractères"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="passwordConfirm"
              className="text-main-medium text-s-bold"
            >
              Entrez le mot de passe à nouveau
            </label>
            <input
              className={`border rounded-sm border-main-medium/40 text-s-regular focus:border-info-medium/40 focus:shadow-md ${
                errorField === 'password'
                  ? 'border-danger-medium'
                  : 'border-main-medium/40'
              } pl-2`}
              type="password"
              name="passwordConfirm"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-s-bold">
              Selectionner le type de usage que vous souhaitez
            </p>
            <label className="text-main-medium text-s-regular">
              <input
                type="radio"
                name="account_type"
                value="private"
                onChange={handleChange}
              />{' '}
              Compté privé
            </label>
            <label className="text-main-medium text-s-regular">
              <input
                type="radio"
                name="account_type"
                value="entreprise"
                onChange={handleChange}
              />
              Compte entreprise
            </label>
          </div>
          <Button type="submit" content="Inscription" />
        </form>
        {error && <p className="text-danger-medium">{error}</p>}
        {success && <p className="text-info-medium">{success}</p>}
        <article className="text-xs-regular">
          <p>
            En créant un compte, vous acceptez les conditions d'utilisation et
            de vente d'Amazon. Consultez notre déclaration de confidentialité,
            notre politique relative aux cookies ainsi que notre politique
            relative aux publicités ciblées par centres d'intérêts.
          </p>
        </article>
        <article className="text-s-regular flex items-center gap-3 border-t pt-5">
          <p>Vous possédez déjà un compte ?</p>
          <button
            onClick={() => openModal('login')}
            type="button"
            className="flex items-center gap-1 text-info-high hover:text-brand-primary hover:underline"
          >
            <p>Identifiez-vous </p>
            <img
              className="w-[6px] h-[6px]"
              src="/assets/icons/chevron-right.svg"
              alt=""
            />
          </button>
        </article>
      </section>
    </div>
  );
}

export default RegisterPage;
