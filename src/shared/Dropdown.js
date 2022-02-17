import React from "react";
import styled from "styled-components";

const Select = styled.select`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 2px 6px 0 rgba(31, 38, 135, 0.37);
  color: gray;
  font-size: 1.2rem;
  border: none;
  background: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  // option styling
  margin: 0px;
  margin-bottom: 20px;
  color: "#848181";
  // custom styling of chevron
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    no-repeat right #fff;
  -webkit-appearance: none;
  background-position-x: calc(100% - 20px);
  width: 89%;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    margin-bottom: 0;
    height: 6vh;
  }
`;

export const Dropdown = ({ id, title, options, handleChange }) => {
  return (
    <div>
      <Select id={id} onChange={(event) => handleChange(event.target.value)}>
        <option value="" hidden>
          {title}
        </option>
        {options.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </Select>
    </div>
  );
};
