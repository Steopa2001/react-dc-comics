
const Footer = () => {

  //creo struttura dati per i link del footer
  const footerLinks = [
  {
    title: "DC COMICS",
    links: ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News", "Shop DC", "Shop DC Collectibles"]
  },
  {
    title: "DC",
    links: ["Terms Of Use", "Privacy Policy (New)", "Ad Choices", "Advertising", "Jobs", "Subscriptions", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us"]
  },
  {
    title: "SITES",
    links: ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"]
  }
];



  return (
    <footer>
       <div
        className="cont-foot-background"
      >
        <div
          className="logo-background"
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
        <div className="cont-foot">
          <div className="btn">
            <div className="sign">SIGN-UP NOW!</div>
          </div>

          <div className="lista-social">
            <h3>FOLLOW US</h3>
            <div className="icon-footer">
              <img src='/img/footer-facebook.png' alt="facebook" />
              <img src='/img/footer-twitter.png' alt="twitter" />
              <img src='/img/footer-youtube.png' alt="youTube" />
              <img src='/img/footer-pinterest.png' alt="pinterest" />
              <img src='/img/footer-periscope.png' alt="periscope" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
