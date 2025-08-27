
//importo la Navbar 
import Navbar from "./Navbar";


const Header = ({links}) => {
  return (
    <header>
      <Navbar links={links}/>
    </header>
  );
};

export default Header;
