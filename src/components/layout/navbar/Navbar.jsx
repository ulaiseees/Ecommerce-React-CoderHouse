import { CartWidget } from "./CartWidget"
import "./Navbar.css";

const Navbar = () => {
  const categorias = ["Con Envío", "Sin Envío"];
  return (
    <nav className="navbar-container">
      <div className="container">
        <h1> Pedras Boreales </h1>
        <ul className="navbar-lista">
          {categorias.map((categoria) => (
          <li key={categoria}>
            <a href="{categoria}">{categoria}</a>
          </li>
        ))}
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;