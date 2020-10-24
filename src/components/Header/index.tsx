import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Header, HeaderContent, Icons } from "./styles";

import pokeLogo from "../../assets/pokeapi_logo.png";

const HeaderComponent: React.FC = () => (
  <Header>
    <HeaderContent>
      <a href="https://pokeapi.co/">
        <img src={pokeLogo} alt="PokeApi Logo" />
      </a>
      <Icons>
        <a href="https://github.com/Wallghost" target="blank">
          <FaGithub size={37} />
        </a>
        <a href="https://www.linkedin.com/in/miguel-pombo/" target="blank">
          <FaLinkedin size={37} />
        </a>
      </Icons>
    </HeaderContent>
  </Header>
);

export default HeaderComponent;
