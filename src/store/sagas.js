import { call, put, takeLatest } from "redux-saga/effects";
import { fetchCurrencies as fetchCurrenciesList } from "../services/RequestService";
import { Currencies } from "./../constants";

function* fetchCurrencies({ payload }) {
  try {
    // call the api
    const { conversion_rates: conversionRates, base_code: baseCode } =
      yield call(fetchCurrenciesList, payload);
    // call the success action with data
    yield put({
      type: Currencies.setCurrencies,
      payload: { conversionRates, baseCode },
    });
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeLatest(Currencies.fetchCurrencies, fetchCurrencies);
}
