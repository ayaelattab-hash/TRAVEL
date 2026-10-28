import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import "../css/inscription.css";

function Connexion() {
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [erreur, setErreur] = useState("");
  const [envoi, setEnvoi] = useState(false);
  const navigate = useNavigate();

  async function envoyer(e) {
    e.preventDefault();
    setErreur("");

    if (!email.trim() || !mdp) return setErreur("Veuillez remplir tous les champs.");

    setEnvoi(true);
    try {
      
const res = await fetch(
  "http://localhost/php/TRAVEL/travel-app-backend/routes/auth/connexion.php",
  {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.trim(),
      mp: mdp,
    }),
  }
);

const data = await res.json();

if (!res.ok || !data.success) {
  setErreur(data.message || "Une erreur est survenue.");
} else {
  localStorage.setItem(
    "user",
    JSON.stringify({
      nom: data.nom,
      role: data.role,
    })
  );

  navigate("/");
}

    } catch {
      setErreur("Impossible de contacter le serveur. Vérifiez que XAMPP est lancé.");
    } finally {
      setEnvoi(false);
    }
  }

  return (
    <>
      <Header />

      <main className="ins-page">
        <div className="ins-carte">
          <span className="ins-surtitre">Connexion</span>
          <h1>Se connecter</h1>

          <form onSubmit={envoyer} noValidate>
            <div className="ins-champ">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="ins-champ">
              <label htmlFor="mdp">Mot de passe</label>
              <input
                id="mdp"
                type="password"
                placeholder="Votre mot de passe"
                value={mdp}
                onChange={(e) => setMdp(e.target.value)}
              />
            </div>

            {erreur && <p className="ins-erreur">{erreur}</p>}

            <button type="submit" disabled={envoi}>
              {envoi ? "Veuillez patienter…" : "Se connecter"}
            </button>
          </form>

          <p className="ins-lien">
            Pas encore de compte ? <Link to="/inscription">Créer un compte</Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Connexion;