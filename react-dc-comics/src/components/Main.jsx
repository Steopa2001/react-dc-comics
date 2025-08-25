import comics from "../assets/img/buy-comics-digital-comics.png";
import merchandise from "../assets/img/buy-comics-merchandise.png";
import subscriptions from "../assets/img/buy-comics-subscriptions.png";
import locator from "../assets/img/buy-comics-shop-locator.png";
import power from "../assets/img/buy-dc-power-visa.svg";

const Main = () => {
  return (
    <main>
      <div className="cont-black">
        <div className="container-black">
          <div className="main-text">
            <h2>__&gt; Content goes here &lt;__</h2>
          </div>
        </div>
      </div>
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
                <p>DC MERCHANDISE</p>
              </li>
              <li>
                <img src={subscriptions} alt="" />
                <p>SUBSCRIPTION</p>
              </li>
              <li>
                <img src={locator} alt="" />
                <p>COMIC SHOP LOCATOR</p>
              </li>
              <li className="locator">
                <img src={power} alt="" />
                <p>DC POWER VISA</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
