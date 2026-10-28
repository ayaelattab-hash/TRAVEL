
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajouterVille } from "../redux/destinationSlice";

function DestinationForm() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(
    (state) => state.destinations
  );

  const [nom, setNom] = useState("");
  const [pays, setPays] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(
        ajouterVille({ nom, pays, description, image })
      ).unwrap();

      alert("Ville ajoutée avec succès !");

      setNom("");
      setPays("");
      setDescription("");
      setImage(null);
    } catch (err) {
      alert(err || "Erreur lors de l'ajout");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom de la ville</label>
        <input
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Pays</label>
        <input
          value={pays}
          onChange={(e) => setPays(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Choisir une image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Ajout en cours..." : "Ajouter la ville"}
      </button>

      {error && <p>{error}</p>}
    </form>
  );
}

export default DestinationForm;
