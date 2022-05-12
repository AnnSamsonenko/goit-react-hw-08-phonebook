import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';
import { ContactsNav } from 'components/ContactsNav/ContactsNav';
import { UserNav } from 'components/UserNav/UserNav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Container } from 'components/AppStyled';
import { NavBar, NavWrapper } from './HeaderStyled';

export const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <NavBar>
      <Container>
        <NavWrapper>
          <ContactsNav />
          {isLoggedIn ? <UserNav /> : <AuthNav />}
        </NavWrapper>
      </Container>
    </NavBar>
  );
};
