//importo l'immagine 
import footerBg from "../assets/img/footer-bg.jpg";

const Footer = () => {
  return (
    <footer>
      <div
        className="cont-foot-background"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="list-footer">
            <ul>
                <li className="bold-li">DC COMICS</li>
                <li>Characters</li>
                <li>Comics</li>
                <li>Movies</li>
                <li>TV</li>
                <li>Games</li>
                <li>Videos</li>
                <li>News</li>
                <li className="bold-li">SHOP</li>
                <li>Shop DC</li>
                <li>Shop DC Collectibles</li>
            </ul>
            <ul className="margin-ul">
                <li className="bold-li">DC</li>
                <li>Terms Of Use</li>
                <li>Privacy policy &#40;New&#41;</li>
                <li>Ad Choises</li>
                <li>Advertising</li>
                <li>Jobs</li>
                <li>Subscriptions</li>
                <li>Talent Workshops</li>
                <li>CPSC Certificates</li>
                <li>Ratings</li>
                <li>Shop Help</li>
                <li>Contact Us</li>
            </ul>
            <ul className="margin-ul">
                <li className="bold-li">SITES</li>
                <li>DC</li>
                <li>MAD Magazine</li>
                <li>DC Kids</li>
                <li>DC Universe</li>
                <li>DC Power Visa</li>
            </ul>
        </div>
      </div>

      <div className="cont-foot-grey"></div>

    </footer>
  );
};

export default Footer;
