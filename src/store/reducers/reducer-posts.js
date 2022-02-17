import { Currencies } from "../../constants";

const initialState = {
  data: { conversionRates: [], baseCode: "" },
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Currencies.fetchCurrencies:
      return state;
    case Currencies.setCurrencies:
      return {
        data: action.payload,
      };
    default:
      return initialState;
  }
};
