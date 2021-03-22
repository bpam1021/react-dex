import React from "react";
import { BrowserRouter } from "react-router-dom";

import { FavoritesPokemonsProvider } from "./context/FavoritePokemons/FavoritePokemonsContext";

import GlobalStyles from "./Styles/global";

import Router from "./routes";

import Header from "./components/Header";

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Header />
    <FavoritesPokemonsProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </FavoritesPokemonsProvider>
  </>
);

export default App;
