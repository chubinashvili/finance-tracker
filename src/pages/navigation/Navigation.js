import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

// styles
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <Fragment>
      <nav className={styles.navbar}>
          <ul>
              <li className={styles.title}>myMoney</li>
              
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>            
          </ul>
      </nav>
      <Outlet />
    </Fragment>
  )
}

export default Navigation