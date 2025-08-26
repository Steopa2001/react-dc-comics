
import comics from "../assets/img/buy-comics-digital-comics.png";
import merchandise from "../assets/img/buy-comics-merchandise.png";
import subscriptions from "../assets/img/buy-comics-subscriptions.png";
import locator from "../assets/img/buy-comics-shop-locator.png";
import power from "../assets/img/buy-dc-power-visa.svg";

const IconBar = () => {

  return (
    <div className="cont-blue">
      <div className="container-blue">
        <div className="list-icon">
          <ul>
            <li>
              <img src={comics} alt="" />

              <p>DIGITAL COMICS</p>
            </li>

            <li>
              <img src={merchandise} alt="" />

              <p>DIGITAL COMICS</p>
            </li>

            <li>
              <img src={subscriptions} alt="" />

              <p>DIGITAL COMICS</p>
            </li>

            <li>
              <img src={locator} alt="" />

              <p>DIGITAL COMICS</p>
            </li>

            <li>
              <img src={power} alt="" />

              <p>DIGITAL COMICS</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IconBar;
