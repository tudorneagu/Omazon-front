import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import type {AuthContextType} from '../../contexts/AuthContext'
import { ModalContext } from '../../contexts/ModalContext';

function Account() {
  const { loged, focusEmailInput } = useContext<AuthContextType>(AuthContext);
  const { openModal } = useContext(ModalContext);
  const handleInteraction = () => {
    openModal('login');
    focusEmailInput();
  };

  return (
    <div className="flex flex-col">
      <button
        type="button"
        className="text-main-lowest menu-s cursor-pointer"
        onClick={() =>
          loged ? openModal('accountDetails') : openModal('login')
        }
        onKeyDown={(e) => {
          console.log('Key down event:', e.key);
          if (e.key === 'Enter') {
            handleInteraction();
          }
        }}
      >
        Bonjour, identifiez vous
      </button>
      <div className="flex items-center">
        <p className="text-main-low menu-m pr-1">Compte et listes</p>
        <img className="w-2 h-2" src="./assets/icons/down.svg" alt="" />
      </div>
    </div>
  );
}

export default Account;
