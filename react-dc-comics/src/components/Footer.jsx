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
          height: "200px",
        }}
      ></div>
      <div className="cont-foot-grey"></div>
    </footer>
  );
};

export default Footer;
