import React from "react";
import { Container } from "../assets/styles/table";
import { Table } from "../shared/table";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MainCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  overflow: auto;
  width: 100%;
`;
const ItemsCenter = styled.div`
  margin-bottom: 6rem;
  overflow: auto;
  width: 25%;
  @media (max-width: 1199px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Heading = styled.h1`
  padding-top: 2rem;
`;

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
    <MainCenter>
      <Heading>Currency Exchange Rates</Heading>
      <ItemsCenter>
        <Container>
          <Table columns={columns} data={data} />
        </Container>
      </ItemsCenter>
    </MainCenter>
  );
}

export default CurrencyExchangeRates;
