import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchVille from "../components/search";
import { fetchVilles } from "../redux/destinationSlice";
import "../css/Dashboard.css";


function Dashboard() {
  const villes = useSelector((state) => state.destinations.villes);
  const navigate = useNavigate();

  const [recherche, setRecherche] = useState("");
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchVilles());
}, [dispatch]);

  return (
    <div className="dashboard">

      {/* Search */}
      <SearchVille onSearch={setRecherche} />

      {/* Section bienvenue */}
      <div className="bienvenue">
        <div>
          <h2>Bienvenue dans votre espace !</h2>
          <p>Gérez facilement toutes vos destinations.</p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300"
          alt="Voyage"
        />
      </div>

      {/* Titre et bouton ajouter */}
      <div className="titre">
        <h2>Toutes les destinations</h2>

        <button onClick={() => navigate("/ajouter-ville")}>
          + Ajouter une ville
        </button>
      </div>

      {/* Liste des villes */}
      {villes
        .filter((ville) =>
          ville.nom.toLowerCase().includes(recherche.toLowerCase())
        )
        .map((ville) => (
          <div className="ville" key={ville.id}>
            <img
              src={`http://php.local/TRAVEL/travel-app-backend/${ville.image}`}
              alt={ville.nom}
            />

            <div>
              <h3>{ville.nom}</h3>
              <p>{ville.pays}</p>
            </div>

            <button
              onClick={() =>
                navigate(`/modifier-ville/${ville.id}`)
              }
            >
              Modifier
            </button>

            <button onClick={() => alert("Suppression à ajouter")}>
              Supprimer
            </button>
          </div>
        ))}

    </div>
  );
}

export default Dashboard;
