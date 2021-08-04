import React, { useState } from "react";
import Select from "react-select";
import TablePagination from "./TablePagination";
import './table.css'
import { Container4, TableDropDown, TableDropDownButton } from './Table.style'

const option1 = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function Table() {
  let [selectedOption1, setSelectedOption1] = useState(null);

  function handleChange1(selectedOption1) {
    setSelectedOption1(selectedOption1);
    console.log(`Option selected:`, selectedOption1);
  }

  return (
    <Container4>
      <div className='table-dropdown'>
        <Select
          value={selectedOption1}
          onChange={handleChange1}
          options={option1}
          placeholder="Status"
          className="all-selectbox"
        />
        <Select
          value={selectedOption1}
          onChange={handleChange1}
          options={option1}
          placeholder="Priority"
          className="all-selectbox"
        />
        <Select
          value={selectedOption1}
          onChange={handleChange1}
          options={option1}
          placeholder="Brand"
          className="all-selectbox"
        />
        <Select
          value={selectedOption1} 
          onChange={handleChange1}
          options={option1}
          placeholder="vertical"
          className="all-selectbox"
        />
        <Select
          value={selectedOption1}
          onChange={handleChange1}
          options={option1}
          placeholder="golive"
          className="all-selectbox"
        />
        <TableDropDownButton >Apply</TableDropDownButton>
        <TableDropDownButton >Reset</TableDropDownButton>
      </div>
      <div className="table-data">
          <TablePagination/>
      </div>
    </Container4>
  );
}

export default Table;
