
import { Routes, Route } from "react-router-dom";
import Acceuil from "./pages/home";
import Apropos from "./pages/about";
import Contact from "./components/contact";
import AjouterVille from "./pages/ajouteVilles";
import AfficherVille from "./pages/AfficherVille";
import Dashboard from "./pages/dashboard";

import Inscription from "./components/inscription";
import Connexion from "./components/connexion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Acceuil />} />
      <Route path="/a-propos" element={<Apropos />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ajouter-ville" element={<AjouterVille />} />
      <Route path="/destinations" element={<AfficherVille />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/inscription" element={<Inscription />} />
      <Route path="/connexion" element={<Connexion />} />
    </Routes>
  );
}

export default App;
