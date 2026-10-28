
import Header from "../components/header";
import Footer from "../components/footer";
// import "./acceuil.css";
import "../css/about.css";

const services = [
  {
    icon: "✈️",
    titre: "Organisation de voyages",
    description:
      "Nous vous aidons à organiser vos voyages selon vos envies et votre budget.",
  },
  {
    icon: "🗺️",
    titre: "Circuits touristiques",
    description:
      "Découvrez les plus belles destinations du Maroc grâce à nos circuits touristiques.",
  },
  {
    icon: "🤝",
    titre: "Conseils personnalisés",
    description:
      "Notre équipe vous accompagne pour choisir le voyage qui vous convient.",
  },
];

function Apropos() {
  return (
    <div className="page-apropos">
      <Header />

      <main>
        {/* En-tête de la page */}
        <section className="ap-entete">
          <div className="ap-entete-contenu">
            <span className="ap-surtitre">RIHLA VOYAGES</span>
            <h1>À propos de nous</h1>
            <p>
              Découvrez notre agence et notre passion pour les voyages.
            </p>
          </div>
        </section>

        {/* Présentation de l'agence */}
        <section className="ap-presentation">
          <div className="ap-presentation-image">
            <img
              src="/image/magasin.jpg"
              alt="Découverte du Maroc"
            />
          </div>

          <div className="ap-presentation-texte">
            <span className="ap-surtitre">QUI SOMMES-NOUS ?</span>

            <h2>Bienvenue chez Rihla</h2>

            <p>
              Rihla est une agence de voyages dédiée à la découverte,
              à l'aventure et à la découverte de nouvelles cultures.
            </p>

            <p>
              Notre objectif est de vous accompagner dans l'organisation
              de vos voyages et de vous proposer des expériences adaptées
              à vos envies, à vos besoins et à votre budget.
            </p>

            <p>
              Nous souhaitons vous aider à découvrir les richesses du
              Maroc et à profiter pleinement de chaque destination.
            </p>
          </div>
        </section>

        {/* Nos services */}
        <section className="ap-services">
          <div className="ap-titre-section">
            <span className="ap-surtitre">CE QUE NOUS PROPOSONS</span>
            <h2>Nos services</h2>
            <p>
              Des services pensés pour rendre votre voyage plus simple.
            </p>
          </div>

          <div className="ap-services-cartes">
            {services.map((service, index) => (
              <article className="ap-service-carte" key={index}>
                <div className="ap-service-icone">{service.icon}</div>

                <h3>{service.titre}</h3>

                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Pourquoi nous choisir */}
        <section className="ap-pourquoi">
          <div className="ap-pourquoi-texte">
            <span className="ap-surtitre">NOTRE ENGAGEMENT</span>

            <h2>Pourquoi choisir Rihla ?</h2>

            <p>
              Nous mettons l'accent sur l'écoute, l'accompagnement
              et la satisfaction de nos clients.
            </p>

            <ul className="ap-points">
              <li>✓ Un accompagnement personnalisé</li>
              <li>✓ Des conseils adaptés à vos besoins</li>
              <li>✓ La découverte des destinations marocaines</li>
              <li>✓ Une organisation simple et pratique</li>
            </ul>
          </div>

          <div className="ap-pourquoi-image">
            <img
              src="/image/personne2.jpg"
              alt="Destination touristique au Maroc"
            />
          </div>
        </section>

        {/* Informations de l'agence */}
        <section className="ap-contact-magasin">
          <div className="ap-titre-section">
            <span className="ap-surtitre">CONTACTEZ-NOUS</span>
            <h2>Informations de notre agence</h2>
            <p>
              Besoin d'informations ? Nous sommes à votre écoute.
            </p>
          </div>

          <div className="ap-contact-cartes">
            <article className="ap-contact-carte">
              <div className="ap-contact-icone">📍</div>
              <h3>Notre adresse</h3>
              <p>Avenue Hassan II, Agadir, Maroc</p>
            </article>

            <article className="ap-contact-carte">
              <div className="ap-contact-icone">📞</div>
              <h3>Téléphone</h3>
              <p>+212 600 000 000</p>
            </article>

            <article className="ap-contact-carte">
              <div className="ap-contact-icone">✉️</div>
              <h3>E-mail</h3>
              <p>contact@rihla-voyages.example</p>
            </article>

            <article className="ap-contact-carte">
              <div className="ap-contact-icone">🕒</div>
              <h3>Horaires</h3>
              <p>Du lundi au samedi</p>
              <p>09h00 – 18h00</p>
            </article>
          </div>
        </section>

        {/* Appel à l'action */}
        
        
      </main>

      <Footer />
    </div>
  );
}

export default Apropos;
