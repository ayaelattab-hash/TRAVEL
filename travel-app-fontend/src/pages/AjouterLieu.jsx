import "../css/DetailsVille.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

function AjouterLieu() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [enCours, setEnCours] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    if (!image) {
      setMessage("Veuillez choisir une photo.");
      return;
    }

    const formData = new FormData();
    formData.append("nom", nom);
    formData.append("description", description);
    formData.append("id_ville", id);
    formData.append("image", image);

    setEnCours(true);

    try {
      const response = await fetch(
        "http://localhost/php/TRAVEL/travel-app-backend/routes/ajouterLieu.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de l'ajout.");
      }

      navigate(`/details-ville/${id}`);
    } catch (error) {
      setMessage(error.message || "Erreur de connexion au serveur.");
    } finally {
      setEnCours(false);
    }
  }

  return (
    <div>
      <Header />

      <main className="ajouter-lieu-page">
        <h1>Ajouter un lieu touristique</h1>
        <p>Ajoutez un lieu à la ville sélectionnée.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="nom">Nom du lieu</label>
          <input
            id="nom"
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <label>Ville sélectionnée</label>
          <input type="text" value={`Ville n° ${id}`} readOnly />

          <label htmlFor="image">Photo du lieu</label>
          <input
            id="image"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            onChange={(e) => setImage(e.target.files[0] || null)}
            required
          />

          {message && <p role="alert">{message}</p>}

          <button type="submit" disabled={enCours}>
            {enCours ? "Ajout en cours..." : "Ajouter le lieu"}
          </button>

          <button
            type="button"
            onClick={() => navigate(`/details-ville/${id}`)}
          >
            Annuler
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default AjouterLieu;
