//importo immagine in react
import logo from "../assets/img/dc-logo.png";

const Navbar = () => {
  return (
       <div className="container">
        <img src={logo} alt="logo" />
        <div className="list-header">
          <ul>
            <li>
              <a href="#">CHARACTERS</a>
            </li>
            <li>
              <a href="#" className="border">COMICS</a>
            </li>
            <li>
              <a href="#">MOVIES</a>
            </li>
            <li>
              <a href="#">TV</a>
            </li>
            <li>
              <a href="#">GAMES</a>
            </li>
            <li>
              <a href="#">COLLECTIBLES</a>
            </li>
            <li>
              <a href="#">VIDEOS</a>
            </li>
            <li>
              <a href="#">FANS</a>
            </li>
            <li>
              <a href="#">NEWS</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Navbar
