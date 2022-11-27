import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogout } from '../../hooks/useLogout';

// styles
import styles from './Navigation.module.css';

const Navigation = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <Fragment>
      <nav className={styles.navbar}>
          <ul>
              <li className={styles.title}>Track Every Dollar</li>

            {user ? (
              <Fragment>
                <li>hello, {user.displayName}</li>
                <li>
                  <button className='btn' onClick={logout}>Logout</button>
                </li>           
              </Fragment>
            ) : (
              <Fragment>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li> 
              </Fragment>              
            )}
          </ul>
      </nav>
      <Outlet />
    </Fragment>
  )
}

export default Navigation