import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';
import { ContactsNav } from 'components/ContactsNav/ContactsNav';
import { UserNav } from 'components/UserNav/UserNav';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header>
      <ContactsNav />
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </header>
  );
};
