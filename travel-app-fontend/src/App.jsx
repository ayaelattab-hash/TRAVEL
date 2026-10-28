import { Routes, Route } from "react-router-dom";
import Acceuil from "./pages/home";
import Apropos from "./pages/about";
import AjouterVille from "./pages/ajouteVilles";
import AfficherVille from "./pages/AfficherVille";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Acceuil />} />
      <Route path="/a-propos" element={<Apropos />} />
      <Route path="/ajouter-ville" element={<AjouterVille />}/>
      <Route path="/destinations" element={<AfficherVille />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
  );
}

export default App;