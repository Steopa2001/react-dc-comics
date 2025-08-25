//importo immagine in react
import logo from "../assets/img/favicon.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
