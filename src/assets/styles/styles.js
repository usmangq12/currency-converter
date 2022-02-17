import styled from "styled-components";

export const Button = styled.button`
  background: #1da1f2;
  color: white;
  border: 2px solid #1da1f2;
  border-radius: 7px;
  padding: 20px 60px;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 10px;
  transition: 0.3s all;
  :hover {
    opacity: 0.8;
    transition: 0.3s all;
  }
  :focus {
    outline: none;
  }
  @media (max-width: 768px) {
    width: 89%;
    padding: 12px 0px;
    margin: 0;
  }
  @media (max-width: 479px) {
    width: 94%;
    padding: 12px 0px;
    margin: 0;
  }
`;

export const MainDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top:50px;
}
`;

export const Div = styled.div`
// display: flex;
align-items: center;
flex-direction: column;
height: 80vh;
width: 30vw;  
background: rgba(255, 255, 255, 0.15);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop-filter: blur(8.5px);
-webkit-backdrop-filter: blur(8.5px);
border-radius: 10px;
color: #ffffff;
text-transform: uppercase;
letter-spacing: 0.4rem;
}
`;

export const DropDownContainer = styled.div`
  width: 12%;
  @media (max-width: 1199px) {
    width: 12%;
  }
  @media (max-width: 991px) {
    width: 25%;
  }
  @media (max-width: 479px) {
    margin-left: 12%;
    width: 40%;
    margin-top: 20px;
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
  color: black;
  margin-left: 2vw;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p``;
export const Heading2 = styled.h2``;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #808080;
  margin-top: 20px;
`;

export const Image = styled.img`
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
`;

export const MainHeader = styled.div`
  background: #00be28;
  height: 10vh;
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
  padding: 20px;
`;

export const Arrow = styled.button`
  font-size: 2rem;
  background: #00be28;
  border: 1px solid #00be28;
  color: #fff;
  margin-right: 10px;
  font-weight: bold;
`;

export const ItemCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DropdownContainer = styled.div`
  width: 12%;
  @media (max-width: 1199px) {
    width: 12%;
  }
  @media (max-width: 991px) {
    width: 25%;
  }
  @media (max-width: 479px) {
    margin-left: 12%;
    width: 40%;
    margin-top: 20px;
  }
`;

export const ContentContainer = styled.div`
  text-align: center;
`;

export const MainDropdownContainer = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 88%;
    margin-left: 6%;
  }
  @media (max-width: 479px) {
    width: 94%;
    margin-left: 3%;
  }
`;
