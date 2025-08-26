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

const Footer = () => {

  return (
    <footer>
       <div
        className="cont-foot-background"
      >
        <div
          className="logo-background"
        ></div>

        <div className="list-footer">
          {footerLinks.map((section, index) => (
            <ul key={index} className={index !== 0 ? 'margin-ul' : ''}>
              <li className="bold-li">{section.title}</li>
              {section.links.map((link, i) => (
                <li key={i}>{link}</li>
              ))}
            </ul>
          ))}
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
