import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo,
  ...routeProps
}) {
  const isLoggsedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggsedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
