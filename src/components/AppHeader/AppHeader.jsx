import { useSelector, useDispatch } from 'react-redux';
import './style.scss';
import LoginForm from '../LoginForm/LoginForm';
import { loginRequest, changeField, logout } from '../../actions/user'; // Assurez-vous d'importer les actions correctes

import logo from '../../assets/logo.png';

const AppHeader = () => {
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const isLogged = useSelector((state) => state.user.isLogged);
  const nickname = useSelector((state) => state.user.nickname);

  const dispatch = useDispatch();

  const changeInputField = (newValue, identifier) => {
    dispatch(changeField(newValue, identifier));
  };

  const handleLogin = () => {
    // Dispatchez l'action loginRequest avec les valeurs actuelles de l'email et du mot de passe
    dispatch(loginRequest(email, password));
  };

  const handleLogout = () => {
    // Mettez à jour l'état de déconnexion ici
    dispatch(logout());
  };

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
      <LoginForm
        email={email}
        password={password}
        changeField={changeInputField}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        isLogged={isLogged}
        loggedMessage={`Bienvenue ${nickname}`}
      />
    </header>
  );
};

export default AppHeader;
