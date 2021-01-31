import { useSelector } from 'react-redux';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import { authSelectors } from '../redux/auth';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const getIsFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );
  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn && !getIsFetchingCurrentUser ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
