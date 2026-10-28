import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import "../css/inscription.css";

function Inscription() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [erreur, setErreur] = useState("");
  const [succes, setSucces] = useState(false);
  const [envoi, setEnvoi] = useState(false);

  async function envoyer(e) {
    e.preventDefault();
    setErreur("");

    // Vérifications simples
    if (nom.trim().length < 2) return setErreur("Veuillez entrer votre nom.");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setErreur("E-mail invalide.");
    if (mdp.length < 8) return setErreur("Le mot de passe doit avoir 8 caractères minimum.");

    setEnvoi(true);
    try {
     
const res = await fetch(
  "http://localhost/php/TRAVEL/travel-app-backend/routes/auth/inscription.php",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nom,
      email,
      mot_de_passe: mdp,
    }),
  }
);

      const data = await res.json();

      if (!res.ok) {
        setErreur(data.erreur || "Une erreur est survenue.");
      } else {
        setSucces(true);
        setNom("");
        setEmail("");
        setMdp("");
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
          <span className="ins-surtitre">Inscription</span>
          <h1>Créer un compte</h1>

          {succes ? (
            <div className="ins-succes">
              <p>Votre compte a bien été créé. Bienvenue chez Rihla !</p>
              <Link to="/">Retour à l'accueil</Link>
            </div>
          ) : (
            <form onSubmit={envoyer} noValidate>
              <div className="ins-champ">
                <label htmlFor="nom">Nom</label>
                <input
                  id="nom"
                  type="text"
                  placeholder="Votre nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
              </div>

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
                  placeholder="8 caractères minimum"
                  value={mdp}
                  onChange={(e) => setMdp(e.target.value)}
                />
              </div>

              {erreur && <p className="ins-erreur">{erreur}</p>}

              <button type="submit" disabled={envoi}>
                {envoi ? "Veuillez patienter…" : "Créer mon compte"}
              </button>
              <p className="ins-lien">
  Vous avez déjà un compte ? <Link to="/connexion">Se connecter</Link>
</p>
            </form>
            
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Inscription;