import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__contact">
          <div className="footer__contact__section">
            <h3 className="footer__contact__section__title">Приймальня</h3>
            <p className="footer__contact__section__text">
              <strong>тел.:</strong> 
              <a href="tel:+380442488889" className="footer__contact__phone">(044) 248-88-89</a>
            </p>
            <p className="footer__contact__section__text">
              <strong>факс.:</strong>
              <a href="tel:+380442751225" className="footer__contact__phone">(044) 275- 12-25</a>
            </p>
            <p className="footer__contact__section__text">
              <strong>Е-mail:</strong> 
              <a href="mailto:ndibv_post@ukr.net" className="footer__contact__email">ndibv_post@ukr.net</a>
            </p>
            <p className="footer__contact__section__text">
              <strong>Адреса:</strong> 
              <a
                href="https://maps.app.goo.gl/vxyhDgj7xhdJqkf78"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__contact__address"
              >
                м. Київ, пр. Лобановського 51
              </a>
            </p>
          </div>
        </div>
      </div>
      <hr className="footer__divider" />
      <div className="footer__credits">
          <p className="footer__credits__text">&copy; {new Date().getFullYear()} НДІБВ</p>
          <a 
            href="https://www.linkedin.com/in/savych-tymofii-a87849320/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer__credits__link"
          >
            Created by Tymofii Savych
          </a>
        </div>
    </footer>
  );
};

export default Footer;