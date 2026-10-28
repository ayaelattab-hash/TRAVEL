
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/home.css";

const destinations = [
  {
    image: "/image/marrakech.jpg",
    titre: "Marrakech",
    texte:
      "Découvrez les souks, les palais et les magnifiques jardins de la ville rouge.",
  },
  {
    image: "/image/chawen.jpg",
    titre: "Chefchaouen",
    texte:
      "Promenez-vous dans les ruelles bleues et admirez les montagnes du Rif.",
  },
  {
    image: "/image/moroccoagadir.jpg",
    titre: "Agadir",
    texte:
      "Profitez des plages, du soleil et des paysages de la côte marocaine.",
  },
];

function Acceuil() {
  return (
    <>
      <Header />

      {/* Grande photo d'accueil */}
      <section className="hero">
        <div className="hero-contenu">
          <span className="hero-petit-titre">
            BIENVENUE AU MAROC
          </span>

          <h1>Vivez le Maroc autrement</h1>

          <p>
            Découvrez des paysages magnifiques, des villes
            authentiques et des expériences inoubliables.
          </p>

          <a href="#destinations" className="bouton">
            Explorer le Maroc
          </a>
        </div>
      </section>

      {/* Texte à gauche et vidéo à droite */}
      <section className="section video-section">
        <div className="video-contenu">
          <span className="petit-titre">
            DÉCOUVREZ LE MAROC
          </span>

          <h2>Un voyage au cœur du Maroc</h2>

          <p>
            Explorez un pays riche en couleurs, en culture et
            en traditions. Des ruelles de Marrakech aux
            montagnes du Rif, en passant par les plages
            d'Agadir, chaque destination vous réserve
            une belle aventure.
          </p>

          <a href="#destinations" className="bouton">
            Découvrir nos destinations
          </a>
        </div>

        <div className="video-droite">
         <video
  className="video-maroc"
  autoPlay
  muted
  loop
  playsInline
  poster="/image/grandimage.jpg"
  preload="auto"
>
            <source
              src="/image/videomaroc.mp4"
              type="video/mp4"
            />
            Votre navigateur ne prend pas en charge la vidéo.
          </video>
        </div>
      </section>

      {/* Destinations */}
      <section className="section" id="destinations">
        <div className="titre-centre">
          <span className="petit-titre">
            EXPLOREZ LE MAROC
          </span>

          <h2>Nos destinations</h2>

          <span className="trait-or"></span>

          <p>
            Choisissez votre prochaine aventure et découvrez
            les plus beaux endroits du Maroc.
          </p>
        </div>

        <div className="cartes">
          {destinations.map((destination) => (
            <article
              className="carte"
              key={destination.titre}
            >
              <img
                src={destination.image}
                alt={destination.titre}
              />

              <div className="carte-texte">
                <h3>{destination.titre}</h3>
                <p>{destination.texte}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Informations de l'agence */}
      <section className="agence-section">
        <div className="titre-centre">
          <span className="petit-titre">
            À VOTRE SERVICE
          </span>

          <h2>Découvrez notre agence Rihla</h2>

          <span className="trait-or"></span>

          <p>
            Nous vous accompagnons dans l'organisation
            de vos prochaines aventures.
          </p>
        </div>

        <div className="agence-infos">
          <div className="info-item">
            <div className="info-icon">⌖</div>
            <h3>Notre agence</h3>
            <p>Agadir, Maroc</p>
            <p>Venez nous rendre visite !</p>
          </div>

          <div className="info-item">
            <div className="info-icon">◷</div>
            <h3>Nos horaires</h3>
            <p>Lundi – Vendredi : 09h00 – 18h00</p>
            <p>Samedi : 09h00 – 13h00</p>
            <p>Dimanche : Fermé</p>
          </div>

          <div className="info-item">
            <div className="info-icon">✉</div>
            <h3>Contactez-nous</h3>
            <p>Une question sur votre prochain voyage ?</p>
            <a href="mailto:contact@rihla.ma">
              Nous contacter
            </a>
          </div>

          <div className="info-item">
            <div className="info-icon">✈</div>
            <h3>Nos services</h3>
            <p>Organisation de voyages</p>
            <p>Séjours touristiques</p>
            <p>Circuits et découvertes</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Acceuil;
