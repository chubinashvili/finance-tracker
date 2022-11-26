import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../hooks/UseAuthContext';
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
              <li className={styles.title}>myMoney</li>
              
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li> 

              {user && (
                <li>
                  <button className='btn' onClick={logout}>Logout</button>
                </li>           
              )}
          </ul>
      </nav>
      <Outlet />
    </Fragment>
  )
}

export default Navigation