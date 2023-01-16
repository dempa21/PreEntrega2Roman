import "./navbar.css";
import { Link } from "react-router-dom"


import logo from "../../assets/img/logo.jpg";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
    {/* <nav> */}
      <ul className="nav-menu">
        <h2>
          <li>
          <img className="logo" src={logo}></img>
          </li>
        </h2>
        <li className="nav-item">
          <Link to="/">
            Mi tienda
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/men's clothing">
          Ropa de hombre
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/women's clothing">
          Ropa de mujer
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/jewelery">
          Joyería
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/electronics">
          Electrónica
          </Link>
        </li>
        

        {/* <CartWidget/> */}
        <span>0 🛒</span>
        {/* FontAwsome */}
      </ul>
    {/* </nav> */}
    </nav>
  );
}

export default NavBar;
