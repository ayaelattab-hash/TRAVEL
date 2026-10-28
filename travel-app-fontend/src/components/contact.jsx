import { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaSnapchatGhost,
  FaFacebookF,
} from "react-icons/fa";
import Header from "./header";
import Footer from "./footer";
import "../css/contact.css";

// Les 4 cartes de contact (ma3loumat mozayafa)
const cartes = [
  {
    icone: <FaPhoneAlt />,
    titre: "Téléphone",
    texte: "+212 5 28 00 00 00",
    lien: "tel:+212528000000",
  },
  {
    icone: <FaWhatsapp />,
    titre: "WhatsApp",
    texte: "+212 6 00 00 00 00",
    lien: "https://wa.me/212600000000",
  },
  {
    icone: <FaRegEnvelope />,
    titre: "E-mail",
    texte: "contact@rihla-voyages.ma",
    lien: "mailto:contact@rihla-voyages.ma",
  },
  {
    icone: <FaMapMarkerAlt />,
    titre: "Adresse",
    texte: "123, Avenue Hassan II, Agadir 80000, Maroc",
    lien: null,
  },
];

// Questions fréquentes
const questions = [
  {
    q: "Comment demander un devis ?",
    r: "Remplissez le formulaire ci-dessus ou écrivez-nous sur WhatsApp en indiquant votre destination, vos dates et le nombre de voyageurs. Nous vous répondons sous 24 heures.",
  },
  {
    q: "Puis-je venir vous voir à l'agence ?",
    r: "Oui, nous vous accueillons à Agadir pendant nos horaires d'ouverture. Un rendez-vous est conseillé en haute saison.",
  },
  {
    q: "Quels moyens de paiement acceptez-vous ?",
    r: "Espèces, virement bancaire et carte bancaire. Un acompte est demandé à la réservation, le solde avant le départ.",
  },
];

function Contact() {
  const [valeurs, setValeurs] = useState({ nom: "", email: "", message: "" });
  const [erreurs, setErreurs] = useState({});
  const [envoye, setEnvoye] = useState(false);

  // Met à jour le champ pendant que l'utilisateur écrit
  function changer(e) {
    setValeurs({ ...valeurs, [e.target.name]: e.target.value });
  }

  // Vérifie les champs
  function verifier() {
    const nouvelles = {};
    if (valeurs.nom.trim().length < 2) {
      nouvelles.nom = "Veuillez entrer votre nom.";
    }
    if (!/^\S+@\S+\.\S+$/.test(valeurs.email)) {
      nouvelles.email = "Veuillez entrer un e-mail valide.";
    }
    if (valeurs.message.trim().length < 10) {
      nouvelles.message = "Votre message est trop court.";
    }
    return nouvelles;
  }

  function envoyer(e) {
    e.preventDefault();
    const nouvelles = verifier();
    setErreurs(nouvelles);

    if (Object.keys(nouvelles).length === 0) {
      // ICI : brancher Formspree ou EmailJS pour envoyer vraiment le message
      console.log("Message à envoyer :", valeurs);
      setEnvoye(true);
      setValeurs({ nom: "", email: "", message: "" });
    }
  }

  return (
    <>
      <Header />

      {/* Titre de la page */}
      <section className="ct-entete">
        <span className="petit-titre">Contact</span>
        <h1>Parlons de votre prochain voyage</h1>
        <span className="trait-or"></span>
        <p>
          Une question, une demande de devis ? Écrivez-nous ou appelez-nous,
          nous répondons sous 24 heures.
        </p>
      </section>

      {/* 4 cartes de contact */}
      <section className="ct-cartes">
        {cartes.map((c) => {
          const contenu = (
            <>
              <span className="ct-icone">{c.icone}</span>
              <span className="ct-label">{c.titre}</span>
              <span className="ct-valeur">{c.texte}</span>
            </>
          );

          return c.lien ? (
            <a
              key={c.titre}
              href={c.lien}
              className="ct-carte"
              target={c.lien.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              {contenu}
            </a>
          ) : (
            <div key={c.titre} className="ct-carte">{contenu}</div>
          );
        })}
      </section>

      {/* Horaires + réseaux + formulaire */}
      <section className="ct-contenu">

        <div className="ct-gauche">
          <div className="ct-boite">
            <span className="ct-label">Horaires d'ouverture</span>
            <div className="ct-ligne"><span>Lundi – Vendredi</span><span>9h – 19h</span></div>
            <div className="ct-ligne"><span>Samedi</span><span>9h – 14h</span></div>
            <div className="ct-ligne"><span>Dimanche</span><span>Fermé</span></div>
          </div>

          <div className="ct-boite">
            <span className="ct-label">Suivez-nous</span>
            <div className="ct-reseaux">
              <a href="https://instagram.com/rihla.voyages" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://snapchat.com/add/rihla.voyages" target="_blank" rel="noreferrer" aria-label="Snapchat">
                <FaSnapchatGhost />
              </a>
              <a href="https://facebook.com/rihla.voyages" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        <form className="ct-formulaire" onSubmit={envoyer} noValidate>
          <h2>Envoyez-nous un message</h2>

          {envoye && (
            <p className="ct-succes">
              Merci ! Votre message a bien été envoyé. Nous vous répondons
              sous 24 heures.
            </p>
          )}

          <div className="ct-champ">
            <label htmlFor="nom">Nom</label>
            <input
              id="nom"
              name="nom"
              type="text"
              placeholder="Votre nom"
              value={valeurs.nom}
              onChange={changer}
            />
            {erreurs.nom && <span className="ct-erreur">{erreurs.nom}</span>}
          </div>

          <div className="ct-champ">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="votre@email.com"
              value={valeurs.email}
              onChange={changer}
            />
            {erreurs.email && <span className="ct-erreur">{erreurs.email}</span>}
          </div>

          <div className="ct-champ">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Destination, dates, nombre de voyageurs…"
              value={valeurs.message}
              onChange={changer}
            ></textarea>
            {erreurs.message && <span className="ct-erreur">{erreurs.message}</span>}
          </div>

          <button type="submit">Obtenir un devis gratuit</button>
          <small>
            Nous répondons sous 24 heures. Vos informations ne sont utilisées
            que pour traiter votre demande.
          </small>
        </form>

      </section>

      {/* Carte : Agadir */}
      <section className="ct-map">
        <iframe
          title="Carte de l'agence à Agadir"
          src="https://maps.google.com/maps?q=30.4202,-9.5982&z=15&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </section>

      {/* FAQ */}
      <section className="ct-faq">
        <div className="ct-faq-titre">
          <span className="petit-titre">Questions fréquentes</span>
          <h2>Avant de nous écrire</h2>
          <span className="trait-or"></span>
        </div>

        <div className="ct-faq-liste">
          {questions.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.r}</p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;