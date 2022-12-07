import React from "react";
import styled from "styled-components";

const Select = styled.select`
  background: rgba(255, 255, 255, 0.15);
  color: gray;
  font-size: 1.2rem;
  border: none;
  background: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  // option styling
  margin: 0px;
  color: "#848181";
  // custom styling of chevron
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    no-repeat right #fff;
  -webkit-appearance: none;
  background-position-x: calc(100% - 20px);
  width: 100%;
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
