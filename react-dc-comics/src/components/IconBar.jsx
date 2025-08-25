// src/components/IconBar.js
import React from "react";
import comics from "../assets/img/buy-comics-digital-comics.png";
import merchandise from "../assets/img/buy-comics-merchandise.png";
import subscriptions from "../assets/img/buy-comics-subscriptions.png";
import locator from "../assets/img/buy-comics-shop-locator.png";
import power from "../assets/img/buy-dc-power-visa.svg";

const IconBar = () => {
  const icons = [
    { img: comics, label: "DIGITAL COMICS" },
    { img: merchandise, label: "DC MERCHANDISE" },
    { img: subscriptions, label: "SUBSCRIPTION" },
    { img: locator, label: "COMIC SHOP LOCATOR" },
    { img: power, label: "DC POWER VISA" },
  ];

  return (
    <div className="cont-blue">
      <div className="container-blue">
        <div className="list-icon">
          <ul>
            {icons.map((icon, index) => (
              <li
                key={index}
                className={icon.label === "DC POWER VISA" ? "locator" : ""}
              >
                <img src={icon.img} alt={icon.label} />
                <p>{icon.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IconBar;
