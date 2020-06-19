import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "./Styles/global";

import Router from "./routes";

import Header from "./components/Header";

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Header />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </>
);

export default App;
