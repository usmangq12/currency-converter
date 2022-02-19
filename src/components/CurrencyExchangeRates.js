import React from "react";
import { Container } from "../assets/styles/table";
import { Table } from "../shared/table";
import { useSelector } from "react-redux";

function CurrencyExchangeRates() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Currency",
        accessor: "currency",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
    ],
    []
  );

  const {
    data: { conversionRates },
  } = useSelector((state) => state.currencies);
  let data = [];
  for (let key in conversionRates) {
    data.push({ currency: key, amount: conversionRates[key] });
  }
  return (
    <Container>
      <Table columns={columns} data={data} />
    </Container>
  );
}

export default CurrencyExchangeRates;
