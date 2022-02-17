import styled from "styled-components";

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 2px 6px 0 rgba(31, 38, 135, 0.37);
  border-radius: 0.5rem;
  width: 80%;
  height: 2vh;
  padding: 1rem 1.6rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 30px;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #00be28;
    backdrop-filter: blur(12rem);
    border-radius: 0.5rem;
  }
  &::placeholder {
    color: #000;
    font-weight: 500;
    font-size: 1rem;
  }
`;
export const Input = ({ id, type, placeholder, value, handleChange }) => {
  return (
    <StyledInput
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default Input;
