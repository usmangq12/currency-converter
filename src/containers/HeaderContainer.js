import React from "react";
import { Header } from "../components";

const HeaderContainer = () => {
  const currencies = ['a', 'b'];
  return <Header currencies={currencies}></Header>;
};

export default HeaderContainer;
