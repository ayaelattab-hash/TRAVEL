import { NavLink, Link } from "react-router-dom";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import "../css/header.css";

function Header() {
  return (
    <header>
      <div className="header-contenu">

        {/* Logo à gauche */}
        <Link to="/" className="logo">Rihla</Link>

        {/* Liens au milieu */}
        <nav>
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/a-propos">À propos</NavLink>
          <a href="/#destinations">Voyages</a>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Icônes à droite */}
        <div className="header-icones">
          <Link to="/favoris" aria-label="Favoris">
            <FaRegHeart />
          </Link>
          <Link to="/inscription" aria-label="Inscription">
            <FaRegUser />
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Header;