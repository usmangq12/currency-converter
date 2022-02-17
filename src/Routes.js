import React from "react";
import { useRoutes } from "react-router-dom";
import { CurrencyForm, CurrencyExchangeRates } from "./containers";

const Routes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <CurrencyForm />,
    },
    {
      path: "/currency-exchange-rates",
      element: <CurrencyExchangeRates />,
    },
  ]);
  return routes;
};

export default Routes;
