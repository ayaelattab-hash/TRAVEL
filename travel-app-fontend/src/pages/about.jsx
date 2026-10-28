import {
  FaPlaneDeparture,
  FaMapMarkedAlt,
  FaHandshake,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaRegClock,
  FaCheck,
} from "react-icons/fa";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/about.css";

const services = [
  {
    icon: <FaPlaneDeparture />,
    titre: "Organisation de voyages",
    description:
      "Nous vous aidons à organiser vos voyages selon vos envies et votre budget.",
  },
  {
    icon: <FaMapMarkedAlt />,
    titre: "Circuits touristiques",
    description:
      "Découvrez les plus belles destinations du Maroc grâce à nos circuits touristiques.",
  },
  {
    icon: <FaHandshake />,
    titre: "Conseils personnalisés",
    description:
      "Notre équipe vous accompagne pour choisir le voyage qui vous convient.",
  },
];

const points = [
  "Un accompagnement personnalisé",
  "Des conseils adaptés à vos besoins",
  "La découverte des destinations marocaines",
  "Une organisation simple et pratique",
];

// Mêmes informations que la page Contact
const infos = [
  {
    icon: <FaMapMarkerAlt />,
    titre: "Notre adresse",
    lignes: ["123, Avenue Hassan II", "Agadir 80000, Maroc"],
  },
  {
    icon: <FaPhoneAlt />,
    titre: "Téléphone",
    lignes: ["+212 5 28 00 00 00"],
    lien: "tel:+212528000000",
  },
  {
    icon: <FaRegEnvelope />,
    titre: "E-mail",
    lignes: ["contact@rihla-voyages.ma"],
    lien: "mailto:contact@rihla-voyages.ma",
  },
  {
    icon: <FaRegClock />,
    titre: "Horaires",
    lignes: ["Lun – Ven : 9h – 19h", "Samedi : 9h – 14h"],
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
            <span className="ap-surtitre ap-surtitre-clair">RIHLA VOYAGES</span>
            <h1>À propos de nous</h1>
            <p>Découvrez notre agence et notre passion pour les voyages.</p>
          </div>
        </section>

        {/* Présentation de l'agence */}
        <section className="ap-presentation">
          <div className="ap-presentation-image">
            <img src="/image/magasin.jpg" alt="Notre agence Rihla à Agadir" />
          </div>

          <div className="ap-presentation-texte">
            <span className="ap-surtitre">QUI SOMMES-NOUS ?</span>

            <h2>Bienvenue chez Rihla</h2>

            <p>
              Rihla est une agence de voyages dédiée à l'aventure et à la
              rencontre de nouvelles cultures.
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
            <span className="ap-trait"></span>
            <p>Des services pensés pour rendre votre voyage plus simple.</p>
          </div>

          <div className="ap-services-cartes">
            {services.map((service) => (
              <article className="ap-service-carte" key={service.titre}>
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
              {points.map((point) => (
                <li key={point}>
                  <FaCheck />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="ap-pourquoi-image">
            <img src="/image/phototext.jpg" alt="Voyageurs au Maroc" />
          </div>
        </section>

        {/* Informations de l'agence */}
        <section className="ap-contact-magasin">
          <div className="ap-titre-section">
            <span className="ap-surtitre">CONTACTEZ-NOUS</span>
            <h2>Informations de notre agence</h2>
            <span className="ap-trait"></span>
            <p>Besoin d'informations ? Nous sommes à votre écoute.</p>
          </div>

          <div className="ap-contact-cartes">
            {infos.map((info) => (
              <article className="ap-contact-carte" key={info.titre}>
                <div className="ap-contact-icone">{info.icon}</div>
                <h3>{info.titre}</h3>
                {info.lignes.map((ligne) =>
                  info.lien ? (
                    <a href={info.lien} key={ligne}>{ligne}</a>
                  ) : (
                    <p key={ligne}>{ligne}</p>
                  )
                )}
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Apropos;