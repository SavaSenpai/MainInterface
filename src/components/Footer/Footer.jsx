import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          &copy; {new Date().getFullYear()} НДІБВ
        </p>
        <div className="footer__links">
          <a href="mailto:ndibv_post@ukr.net">Відділ по роботі із замовниками</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
