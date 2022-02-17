import { Currencies } from "../../constants";

export const fetchCurrenciesSuccess = (data) => {
  return {
    type: Currencies.fetchCurrenciesSuccess,
    payload: data,
  };
};

export const fetchCurrencies = (data) => {
  return {
    type: Currencies.fetchCurrencies,
    payload: data,
  };
};

export const fetchCurrenciesError = (data) => {
  return {
    type: Currencies.fetchCurrenciesError,
    payload: data,
  };
};

export const addBaseCurrency = (data) => {
  return {
    type: Currencies.addBaseCurrency,
    payload: data,
  };
};

export const getBaseCurrency = (data) => {
  return {
    type: Currencies.fetchBaseCurrency,
    payload: data,
  };
};

export const addTargetCurrency = (data) => {
  return {
    type: Currencies.addTargetCurrency,
    payload: data,
  };
};

export const getTargetCurrency = (data) => {
  return {
    type: Currencies.fetchTargetCurrency,
    payload: data,
  };
};
