import { NavLink, Link } from "react-router-dom";
import "../css/header.css";

function Header() {
  return (
    <header>
      <div className="header-contenu">
        <Link to="/" className="logo">Rihla</Link>

        <nav>
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/a-propos">À propos</NavLink>
          <NavLink to="/destinations">Destination</NavLink>
          <a href="#contact">Contact</a>
          <Link to="/inscription" className="inscription">Inscription</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;