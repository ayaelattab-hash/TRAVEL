import "../css/footer.css";

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-contenu">

        <div className="footer-colonne footer-marque">
          <span className="footer-rond">
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
              <path
                d="M8 24c4-9 9-13 20-12-3 2-5 5-6 9-2-2-5-3-9-1 2 1 4 3 4 6-3-2-6-2-9-2z"
                fill="#B8C9A8"
              />
            </svg>
          </span>
          <span className="footer-logo">Rihla</span>
          <p>Des voyages pensés avec soin, pour ceux qui aiment prendre leur temps.</p>
        </div>

        <div className="footer-colonne">
          <h3>Navigation</h3>
          <a href="/">Accueil</a>
          <a href="/a-propos">À propos</a>
          <a href="/#destinations">Voyages</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-colonne">
          <h3>Contact</h3>
          <p>+212 000 000 000</p>
          <p>contact@rihla.com</p>
          <p>Agadir, Maroc</p>
        </div>

        <form className="newsletter">
          <label htmlFor="nl-email" className="newsletter-titre">
            Recevez nos inspirations
          </label>
          <input id="nl-email" type="email" placeholder="votre@email.com" />
          <button type="submit">S'inscrire</button>
        </form>

      </div>

      <div className="copyright">
        © 2026 Rihla. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;