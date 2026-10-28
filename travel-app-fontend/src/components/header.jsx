
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import "../css/header.css";

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  async function deconnecter() {
    try {
      const res = await fetch(
        "http://localhost/php/TRAVEL/travel-app-backend/routes/auth/deconnexion.php",
        {
          method: "POST",
          credentials: "include",
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
      }
    } catch (error) {
      console.error("Erreur de déconnexion :", error);
    }
  }

  return (
    <header>
      <div className="header-contenu">
        <Link to="/" className="logo">Rihla</Link>

        <nav>
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/a-propos">À propos</NavLink>
          <a href="/#destinations">Voyages</a>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="header-icones">
          <Link to="/favoris" aria-label="Favoris">
            <FaRegHeart />
          </Link>

          {user ? (
            <button
              type="button"
              onClick={deconnecter}
              aria-label="Déconnexion"
              title="Déconnexion"
            >
              Déconnexion
            </button>
          ) : (
            <Link to="/inscription" aria-label="Inscription" title="Inscription">
              <FaRegUser />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
