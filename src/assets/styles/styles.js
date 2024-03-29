import styled from "styled-components";

export const Button = styled.button`
  background: #ffff;
  font-weight: 600;
  border: 2px solid #3a444b;
  border-radius: 7px;
  padding: 12px 30px;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 10px;

  @media (max-width: 768px) {
    padding: 12px 30px;
    margin: 0;
    padding: 12px 30px;
    font-size: 16px;
  }
  @media (max-width: 479px) {
    padding: 12px 19px;
    margin: 0;
    font-size: 16px;
  }
`;

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 70px;
  padding-left: 20px;
  padding-right: 20px;
  height: 100vh;
  @media (max-width: 1024px) {
    height: unset;
  }
`;

export const Div = styled.div`
background:#3a444b;
border-radius: 10px;
color: #ffffff;
text-transform: uppercase;
letter-spacing: 0.4rem;
padding:20px;
}
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  margin-top: 20px;
`;

export const TextContainer = styled.div`
  text-align: center;
  background: #92e3a9;
  color: #fff;
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 600;
  border-radius: 0.5rem;
  margin-top: 20px;
  padding: 10px;
`;
export const ResultContainer = styled.span``;

export const Paragraph = styled.p``;
export const Heading2 = styled.h2``;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
  margin-top: 20px;
`;

export const Image = styled.img`
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
`;

export const MainHeader = styled.div`
  background: #21282d;
  box-shadow: 0px 30px 80px rgba(0, 0, 0, 0.5) !important;
  padding: 20px;
`;

export const HeaderTitle = styled.div`
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 600;
  color: white;
`;

export const InnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 479px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Arrow = styled.button`
  font-size: 2rem;
  background: #21282d;
  border: 1px solid #21282d;
  color: #fff;
  margin-right: 10px;
  font-weight: bold;
  @media (max-width: 479px) {
    font-size: 1rem;
  }
`;

export const ItemCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DropdownContainer = styled.div`
  width: 200px;
  @media (max-width: 1199px) {
    width: 200px;
  }
  @media (max-width: 991px) {
    width: 25%;
  }
  @media (max-width: 479px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const ContentContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const MainDropdownContainer = styled.div`
  width: 100%;
`;

export const PaginatorButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  margin-right: 5px;
  border: none;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  @media (max-width: 479px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
    font-weight: 300;
  }
`;
export const SelectedRow = styled.select`
  padding: 10px;
  border-radius: 20px;
  @media (max-width: 479px) {
    padding: 5px;
    margin-top: 10px;
  }
`;

export const PageNo = styled.span`
  color: #ffff;
  margin-left: 5px;
  margin-right: 5px;
`;
