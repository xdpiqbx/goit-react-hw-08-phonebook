import { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Container from './components/Container';
import AppBar from './components/AppBar';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';

import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import { authOperations, authSelectors } from './redux/auth';

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );
  const token = useSelector(authSelectors.getToken);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute exact path="/register" restricted={true} redirectTo="/">
            <RegisterView />
          </PublicRoute>
          <PublicRoute
            exact
            path="/login"
            restricted={true}
            redirectTo="/contacts"
          >
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Container>
    )
  );
};

export default App;
