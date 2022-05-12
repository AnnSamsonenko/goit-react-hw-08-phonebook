import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';

export const ContactsNav = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      {isLoggedIn ? (
        <NavLink to="/contacts" exact="true">
          My Phonebook
        </NavLink>
      ) : (
        <NavLink to="/" exact="true">
          Home
        </NavLink>
      )}
    </nav>
  );
};
