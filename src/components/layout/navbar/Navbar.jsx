import { CartWidget } from "../../common/cartWidget/CartWidget"
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <>
      <div className="containerNavbar">
        <Link to={"/"}>
        <h1>Pedras Boreales</h1>
        </Link>
        <ul className="navbar-lista">
          <Link to={"/"}>Todas</Link>
          <Link to={"/category/Con Envio"}>Con Envío</Link>
          <Link to={"/category/Sin Envio"}>Sin Envío</Link>
        </ul>
      
      <CartWidget />
      </div>
      </>
    </div>
  );
};

export default Navbar;