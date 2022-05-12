import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';
import { authOperations } from 'redux/auth/authOperations';

export const UserNav = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  console.log(name, 'name in usernav');
  return (
    <div>
      <span>Hello, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </button>
    </div>
  );
};
