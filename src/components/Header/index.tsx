import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Header, HeaderContent, Icons } from "./styles";

import pokeLogo from "../../assets/pokeapi_logo.png";

const HeaderComponent: React.FC = () => (
  <Header>
    <HeaderContent>
      <img src={pokeLogo} alt="PokeApi Logo" />
      <Icons>
        <a href="https://github.com/Wallghost" target="blank">
          <FaGithub size={30} />
        </a>
        <a href="teste" target="blank">
          <FaLinkedin size={30} />
        </a>
      </Icons>
    </HeaderContent>
  </Header>
);

export default HeaderComponent;
