import React, { useState } from "react";
import Select from "react-select";
import SearchField from "react-search-field";
// import "./header.css";
import {DashboardButton , DashboardH3 , Container2 , DropDown2 , Drop , SearchBar} from './Header.style'

const option1 = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function Header() {
  let [selectedOption1, setSelectedOption1] = useState(null);
  let [selectedOption2, setSelectedOption2] = useState(null);

  function handleChange1(selectedOption1) {
    setSelectedOption1(selectedOption1);
    console.log(`Option selected:`, selectedOption1);
  }

  function handleChange2(selectedOption2) {
    setSelectedOption2(selectedOption2);
    console.log(`Option selected:`, selectedOption2);
  }

  function onChange(value, e) {
    console.log(e.target.value);
  }

  return (
    <>
      <Container2>
        <div className="content">
          <div className="dashboard">
            <DashboardButton>Product Development &#5171;</DashboardButton>
            <DashboardH3>Dashboard</DashboardH3>
          </div>
        </div>
        <DropDown2>
          <Drop>
            <Select
              value={selectedOption1}
              onChange={handleChange1}
              options={option1}
              placeholder="Brand Analysis"
            />
          </Drop>
          <Drop>
            <Select
              value={selectedOption2}
              onChange={handleChange2}
              options={option1}
              placeholder="Brand Analysis"
            />
          </Drop>
        </DropDown2>
        <SearchBar>
          <SearchField
            placeholder="Search..."
            onChange={onChange}
            classNames="test-class"
            style={{ width: '300px'}}
          />
        </SearchBar>
      </Container2>
    </>
  );
}

export default Header;
