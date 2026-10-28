
import { useEffect, useState } from "react";
import { getWeather } from "../service/weatherService";

function VilleCard({ ville }) {
  const [weather, setWeather] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);

  useEffect(() => {
    let actif = true;

    async function chargerWeather() {
      try {
        setLoadingWeather(true);
        const data = await getWeather(ville.nom);

        if (actif) {
          setWeather(data);
        }
      } catch (error) {
        if (actif) {
          setWeather(null);
        }
      } finally {
        if (actif) {
          setLoadingWeather(false);
        }
      }
    }

    chargerWeather();

    return () => {
      actif = false;
    };
  }, [ville.nom]);

  return (
    <div className="ville-card">
      <img src={`http://site1.local/TRAVEL/travel-app-backend/${ville.image}`} alt={ville.nom}/>
      <div className="ville-card-footer">
        <div className="ville-info">
          <h2>{ville.nom}</h2>
          <p>{ville.pays}</p>
        </div>

        <div className="weather">
          {loadingWeather ? (
            <span>...</span>
          ) : weather ? (
            <>
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
                alt={weather.description}
              />
              <span>{weather.temperature}°C</span>
            </>
          ) : (
            <span>--°C</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default VilleCard;
