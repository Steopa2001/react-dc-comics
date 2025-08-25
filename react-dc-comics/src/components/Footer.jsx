//importo l'immagine 
import footerBg from "../assets/img/footer-bg.jpg";
import logo from '../assets/img/dc-logo-bg.png';

const Footer = () => {
  return (
    <footer>
      <div
        className="cont-foot-background"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: 'no-repeat',
          position: 'relative',
           overflow: "hidden"
        }}
      >
          <div
    style={{
      backgroundImage: `url(${logo})`,
      backgroundSize: "40% auto",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "absolute",
      top: 0,
      left: 300,
      width: "100%",
      height: "100%",
      zIndex: 1,
    }}
  ></div>
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

      <div className="cont-foot-grey">
        <div className="btn-sign"></div>
        <div className="lista-social"></div>
      </div>

    </footer>
  );
};

export default Footer;
