import React from "react";
import Main from "./Main";
import Reviews from './reviews'

import logoOnePlusOne from "../img/Icon/1_plus_1_logo.svg";
import logoFb from "../img/Icon/fb.svg";
import logoTelegram from "../img/Icon/teleg.svg";
import logoInstagram from "../img/Icon/insta.svg";
import logoLupa from "../img/Icon/lupa 1.svg";

import "./Header.css";

const list = [
  { name: "Програми ▼", svgName: "home" },
  { name: "Новини ▼", svgName: "Новини" },
  { name: "Відео", svgName: "fair" },
  { name: "Кіно та серіали", svgName: "setting" },
  { name: "Телепрограма", svgName: "Телепрограма" },
  { logo: logoFb, alt: "logoFb" },
  { logo: logoTelegram, alt: "logoTelegram" },
  { logo: logoInstagram, alt: "logoInstagram" },
];

const Header = () => {
  const [active, setActive] = React.useState(list[0]);

  const click = (name) => {
    setActive(list.find((x) => x.name === name));
  };
  return (
    <div className="header">
      <div className="header-nav">
        <img className="nav-img" src={logoOnePlusOne} alt="logoOnePlusOne" />
        {list.map(({ name, svgName }) => (
          <div
            key={name}
            className={
              active.name === name ? "nav-link nav-link-active" : "nav-link"
            }
            onClick={() => click(name)}
          >
            <div className="nav-link-icon"></div>
            <span className="header-span">{name}</span>
          </div>
        ))}
        <div>
          {list.map(({ logo, alt }) => (
            <img className="nav-logo" src={logo} alt={alt} key={alt} />
          ))}
        </div>
        <div className="nav-lang_group">
          <p className="nav-lang">UA</p>
          <span className="nav-lang_span">|</span>
          <p className="nav-lang">EN</p>
        </div>

        <img className="nav-logo" src={logoLupa} alt="logoLupa" />
      </div>

      <div>
        <Main />
        <Reviews/>
      </div>
    </div>
  );
};

export default Header;
