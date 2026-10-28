
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVilles } from "../redux/destinationSlice";
import VilleCard from "../components/villeCard";
import "../css/AfficherVille.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Searchville from "../components/search";


function AfficherVille() {
  const dispatch = useDispatch();

  const villes = useSelector(
    (state) => state.destinations.villes
  );

  const loading = useSelector(
    (state) => state.destinations.loading
  );

  const error = useSelector(
    (state) => state.destinations.error
  );

  useEffect(() => {
    dispatch(fetchVilles());
  }, [dispatch]);
  console.log("Les villes :", villes);
console.log("Loading :", loading);
console.log("Erreur :", error);

  return (
    <div className="destination-page">
        <Header/>
      <section className="discover-section">
        <div className="discover-content">
          <p className="discover-label">EXPLORE THE WORLD</p>

          <h1>
            Découvrez le monde,
            <br />
            un voyage à la fois.
          </h1>

          <p>
            Explorez des destinations incroyables et
            préparez votre prochaine aventure avec nous.
          </p>

        </div>
      </section>

      <section className="destinations-section" id="destinations">
        <div className="section-heading">
          <p>VOTRE PROCHAINE AVENTURE</p>
          <h2>Nos destinations</h2>
          <span>
            Trouvez l'inspiration pour votre prochain voyage.
          </span>
        </div>

        <Searchville/>

        {loading && <p>Chargement des destinations...</p>}

        {error && <p>Erreur : {error}</p>}

        {!loading && !error && (
          <div className="destinations-grid">
            {villes.map((ville) => (
              <VilleCard key={ville.id} ville={ville} />
            ))}
          </div>
        )}

      </section>
      <Footer/>
    </div>
  );
}

export default AfficherVille;
