import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PrivateRoute({ children, redirectTo, ...routeProps }) {
  const isLoggsedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggsedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
