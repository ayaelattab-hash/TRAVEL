
import { useState } from "react";

function SearchVille({ onSearch }) {
  const [recherche, setRecherche] = useState("");

  const handleChange = (e) => {
    const valeur = e.target.value;
    setRecherche(valeur);
    onSearch(valeur);
  };

  return (
    <input
      type="text"
      placeholder="Rechercher une ville..."
      value={recherche}
      onChange={handleChange}
    />
  );
}

export default SearchVille;
