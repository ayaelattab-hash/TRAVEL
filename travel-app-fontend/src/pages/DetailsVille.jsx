import "../css/DetailsVille.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchVilles } from "../redux/destinationSlice";
import Header from "../components/header";
import Footer from "../components/footer";

function DetailsVille() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const villes = useSelector(
    (state) => state.destinations.villes
  );

  const [lieux, setLieux] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState("");

  const ville = villes.find(
    (v) => String(v.id_ville ?? v.id) === String(id)
  );

  useEffect(() => {
    dispatch(fetchVilles());
  }, [dispatch]);

  useEffect(() => {
    async function chargerLieux() {
      setLoading(true);
      setErreur("");

      try {
        const response = await fetch(
          `http://localhost/php/TRAVEL/travel-app-backend/routes/afficherLieux.php?id_ville=${id}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Erreur de chargement");
        }

        setLieux(data.lieux || []);
      } catch {
        setErreur("Impossible de charger les lieux touristiques.");
      } finally {
        setLoading(false);
      }
    }

    chargerLieux();
  }, [id]);

  return (
    <div>
      <Header />

      <main className="details-ville">
        {!ville ? (
          <p>Chargement des informations de la ville...</p>
        ) : (
          <>
            <button onClick={() => navigate("/destinations")}>
              ← Retour aux destinations
            </button>

            <h1>{ville.nom}</h1>
            <p>{ville.pays}</p>

            <img
              src={`http://site1.local/TRAVEL/travel-app-backend/${ville.image}`}
              alt={ville.nom}
              style={{
                width: "100%",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />

            <h2>À propos de la ville</h2>
            <p>{ville.description || "Aucune description disponible."}</p>

            <div className="lieux-heading">
              <h2>Lieux touristiques</h2>

              <button
                onClick={() => navigate(`/ajouter-lieu/${id}`)}
              >
                + Ajouter un lieu
              </button>
            </div>

            {loading && <p>Chargement des lieux...</p>}
            {erreur && <p>{erreur}</p>}

            {!loading && !erreur && lieux.length === 0 && (
              <p>Aucun lieu touristique pour le moment.</p>
            )}

            <div className="lieux-grid">
              {lieux.map((lieu) => (
                <article className="lieu-card" key={lieu.id_lieu}>
                  <img
                    src={`http://site1.local/TRAVEL/travel-app-backend/${lieu.image}`}
                    alt={lieu.nom}
                  />
                  <h3>{lieu.nom}</h3>
                  <p>{lieu.description}</p>
                </article>
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default DetailsVille;
