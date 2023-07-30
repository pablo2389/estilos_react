import styles from "./Navbar.module.css";
import { NavLink, Outlet } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <nav className={styles.contenedor}>
        <ul>
          <li>
            <NavLink to="/">1-CSS</NavLink>
          </li>
          <li>
            <NavLink to="/module-css">2-Module CSS</NavLink>
          </li>
          <li>
            <NavLink to="/style-js">3-Style JS</NavLink>
          </li>
          <li>
            <NavLink to="/mui-componentes">4-MUI Componentes</NavLink>
          </li>
          <li>
            <NavLink to="/mui-ejemplo">5-MUI Ejemplo</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />

    </>
  );
};

export default Navbar;
