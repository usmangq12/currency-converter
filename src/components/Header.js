import React, { useState, useEffect } from "react";
import {
  DropdownContainer,
  MainHeader,
  InnerHeader,
  HeaderTitle,
  Arrow,
} from "../assets/styles/styles";
import { Dropdown } from "../shared/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { Currencies } from "../constants";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [currencies, setCurrencies] = useState([]);
  const [conversionValue, setConversionValue] = useState(null);
  const dispatch = useDispatch();
  const {
    data: { conversionRates },
  } = useSelector((state) => state.currencies);

  if (Object.keys(conversionRates).length && !currencies.length) {
    const conversionKeys = Object.keys(conversionRates);
    setCurrencies(conversionKeys);
  }

  useEffect(() => {
    async function getData() {
      if (!currencies.length) {
        dispatch({ type: Currencies.fetchCurrencies, payload: "USD" });
      }
    }
    getData();
  }, [dispatch, currencies.length]);

  const handleBaseCurrencySelection = (value) => {
    localStorage.setItem("base_currency", JSON.stringify(value));
    dispatch({ type: Currencies.fetchCurrencies, payload: "" });
    conversionValue && setConversionValue(null);
  };

  return (
    <div>
      <MainHeader>
        <InnerHeader>
          <Link to="/" style={{ textDecoration: "none" }}>
            <HeaderTitle>
              <Arrow> 🠔 </Arrow>
              currency Converter
            </HeaderTitle>
          </Link>

          {currencies && currencies.length ? (
            <DropdownContainer>
              <Dropdown
                id="baseId"
                title="Base Currency"
                options={currencies}
                handleChange={(value) => handleBaseCurrencySelection(value)}
              />
            </DropdownContainer>
          ) : undefined}
        </InnerHeader>
      </MainHeader>
    </div>
  );
};

export default Header;
