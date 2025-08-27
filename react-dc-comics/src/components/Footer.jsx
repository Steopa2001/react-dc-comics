
const Footer = ({links, socialIcons}) => {

  return (
    <footer>
       <div
        className="cont-foot-background"
      >
        <div
          className="logo-background"
        ></div>

        <div className="list-footer">
          {links.map((section, index) => (
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
              {socialIcons.map((icon, i) => (
                <img key={i} src={icon.src} alt={icon.alt}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
