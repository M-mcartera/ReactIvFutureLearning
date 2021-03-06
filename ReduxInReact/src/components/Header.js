import { useSelector, useDispatch } from 'react-redux';
import classes from './Header.module.css';
import { authAuctions } from '../store/index';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.authenticated);
  const logOutHandler = () =>{
    dispatch(authAuctions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
      {isAuth && 
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
          <button onClick={logOutHandler}>Logout</button>
          </li>
        </ul>
          }
      </nav>
    </header>
  );
};

export default Header;
