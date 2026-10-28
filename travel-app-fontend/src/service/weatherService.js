
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeather(nomVille) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(nomVille)}&appid=${API_KEY}&units=metric&lang=fr`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Météo indisponible");
  }

  const data = await response.json();

  return {
    temperature: Math.round(data.main.temp),
    description: data.weather[0].description,
    icon: data.weather[0].icon
  };
}
