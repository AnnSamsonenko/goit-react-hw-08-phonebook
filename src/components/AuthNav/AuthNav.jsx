import { NavLink } from 'react-router-dom';

export const AuthNav = () => (
  <div>
    <NavLink to="/signup" exact="true">
      Sign up
    </NavLink>
    <NavLink to="/login" exact="true">
      Login
    </NavLink>
  </div>
);
