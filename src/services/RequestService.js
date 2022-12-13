export const fetchCurrencies = (selectedBaseCurrency) => {
  return new Promise((resolve, reject) => {
    const apiKey = "6422fba9c541d624575e7795";
    const baseCurrency =
      JSON.parse(localStorage.getItem("base_currency")) || selectedBaseCurrency;
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;
    fetch(url)
      .then((res) => res.json())
      .then((response) => resolve(response))
      .catch((error) => console.log(error));
  });
};
