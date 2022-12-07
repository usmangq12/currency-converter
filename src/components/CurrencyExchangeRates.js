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
  height: 100vh;
  width: 100%;
`;
const ItemsCenter = styled.div`
  margin-bottom: 6rem;
  width: 50%;
  @media (max-width: 1199px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Heading = styled.div`
  padding-top: 2rem;
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  @media (max-width: 469px) {
    font-size: 20px;
    font-weight: 600;
  }
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
