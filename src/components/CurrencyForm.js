import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  MainDiv,
  Div,
  ButtonContainer,
  Title,
  Image,
  ItemCenter,
  ContentContainer,
  MainDropdownContainer,
  Heading2,
} from "../assets/styles/styles";

import { Dropdown } from "../shared/Dropdown";
import logo from "../assets/Images/exchangeRate.svg";
import { Link } from "react-router-dom";
import { Input } from "../shared/Input";
import { Currencies } from "../constants";

import styled from "styled-components";

const DropDowndDiv = styled.div`
  margin-bottom: 20px;
`;
const CurrencyForm = () => {
  const [currencies, setCurrencies] = useState([]);
  const [currencyAmount, setCurrencyAmount] = useState(1);
  const [selectedTargetCurrency, setSelectedTargetCurrency] = useState("");
  const [selectedBaseCurrency, setSelectedBaseCurrency] = useState("");
  const [conversionValue, setConversionValue] = useState(null);

  const dispatch = useDispatch();
  const {
    data: { conversionRates, baseCode },
  } = useSelector((state) => state.currencies);

  if (Object.keys(conversionRates).length && !currencies.length) {
    const conversionKeys = Object.keys(conversionRates);
    setCurrencies(conversionKeys);
  }

  useEffect(() => {
    if (baseCode === selectedBaseCurrency) {
      for (let key in conversionRates) {
        if (key === selectedTargetCurrency) {
          const currencyConversionRate = currencyAmount * conversionRates[key];
          setConversionValue(currencyConversionRate);
        }
      }
    }
  }, [
    conversionRates,
    baseCode,
    selectedBaseCurrency,
    currencyAmount,
    selectedTargetCurrency,
  ]);

  const handleBaseCurrencySelection = (value) => {
    setSelectedBaseCurrency(value);
    conversionValue && setConversionValue(null);
  };

  const handleTargetCurrencySelection = (value) => {
    setSelectedTargetCurrency(value);
    conversionValue && setConversionValue(null);
  };

  const handleResult = () => {
    if (selectedBaseCurrency && selectedTargetCurrency) {
      dispatch({
        type: Currencies.fetchCurrencies,
        payload: selectedBaseCurrency,
      });
    }
  };

  return (
    <MainDiv>
      <Div>
        <Title>Currency Converter</Title>
        <ItemCenter>
          <Image src={logo} style={{ width: 300, height: 300 }} alt="logo" />
        </ItemCenter>
        <ContentContainer>
          <Input
            id="inputId"
            type="number"
            placeholder="Currency Value"
            value={currencyAmount}
            handleChange={(value) => setCurrencyAmount(value)}
          />
          {currencies && currencies.length && (
            <MainDropdownContainer>
              <DropDowndDiv>
                <Dropdown
                  id="baseId"
                  title="Base Currency"
                  options={currencies}
                  handleChange={(value) => handleBaseCurrencySelection(value)}
                />
              </DropDowndDiv>
              <Dropdown
                id="baseId"
                title="Target Currency"
                options={currencies}
                handleChange={(value) => handleTargetCurrencySelection(value)}
              />
            </MainDropdownContainer>
          )}
        </ContentContainer>
        {conversionValue ? <Heading2>{conversionValue}</Heading2> : null}
        <ButtonContainer>
          <Button onClick={() => handleResult()}>Show Results</Button>
          <Link to="/currency-exchange-rates">
            <Button>Exchange Rates</Button>
          </Link>
        </ButtonContainer>
        <ButtonContainer></ButtonContainer>
      </Div>
    </MainDiv>
  );
};

export default CurrencyForm;
