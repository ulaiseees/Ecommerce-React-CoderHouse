import { CartWidget } from "./CartWidget"
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="container">
        <Link to={"/"}>
        <h1>Pedras Boreales</h1>
        </Link>
        <ul className="navbar-lista">
          <Link to={"/"}>Todas</Link>
          <Link to={"/category/Con Envio"}>Con Envío</Link>
          <Link to={"/category/Sin Envio"}>Sin Envío</Link>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;