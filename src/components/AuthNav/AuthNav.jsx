import { NavLink } from 'react-router-dom';
import { AuthNavList, AuthNavItem } from './AuthNavStyled';
export const AuthNav = () => (
  <AuthNavList>
    <AuthNavItem>
      <NavLink to="/signup" exact="true">
        Sign up
      </NavLink>
    </AuthNavItem>
    <AuthNavItem>
      <NavLink to="/login" exact="true">
        Login
      </NavLink>
    </AuthNavItem>
  </AuthNavList>
);
