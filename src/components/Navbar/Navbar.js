import React from "react";
// import Select from "react-select";
import fkImg from "../../images/Flipkart-Logo-2007.png";
import "./Navbar.css";
import {Container, BrandImage , DropDownMenu , DropDown , Hr , Select } from './Navbar.style'




// const option1 = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

// const option2 = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

// const option3 = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

class Navbar extends React.Component {
  // state = {
  //   selectedOption1: null,
  //   selectedOption2: null,
  //   selectedOption3: null,
  // };

  // handleChange1 = (selectedOption1) => {
  //   this.setState({ selectedOption1 });
  //   console.log(`Option selected:`, selectedOption1);
  // };

  // handleChange2 = (selectedOption2) => {
  //   this.setState({ selectedOption2 });
  //   console.log(`Option selected:`, selectedOption2);
  // };

  // handleChange3 = (selectedOption3) => {
  //   this.setState({ selectedOption3 });
  //   console.log(`Option selected:`, selectedOption3);
  // };

  render() {
    // const { selectedOption1, selectedOption2, selectedOption3 } = this.state;

    return (
      <>
        <Container>
          <div className="brand-image">
            <BrandImage src={fkImg} alt="no img" />
          </div>
          <DropDownMenu>
            <DropDown>
              <Select  id="selectbox" data-selected="">
                <option value="" selected="selected" disabled="disabled">
                  Brand Analysis
                </option>
                <option value="1">Ocean Wall</option>
                <option value="2">Skate Park</option>
                <option value="3">Mountain View</option>
                <option value="4">Cityscape</option>
                <option value="5">Workshop</option>
              </Select>
              {/* <Select
                value={selectedOption1}
                onChange={this.handleChange1}
                options={option1}
                placeholder="Brand Analysis"
                width="130px"
              /> */}
            </DropDown>
            <DropDown>
            <Select id="selectbox" data-selected="">
                <option value="" selected="selected" disabled="disabled">
                  Licence Manager
                </option>
                <option value="1">Ocean Wall</option>
                <option value="2">Skate Park</option>
                <option value="3">Mountain View</option>
                <option value="4">Cityscape</option>
                <option value="5">Workshop</option>
              </Select>
              {/* <Select
                value={selectedOption2}
                onChange={this.handleChange2}
                options={option2}
                placeholder="Licence Manager"
              /> */}
            </DropDown>
            <DropDown>
            <Select id="selectbox" data-selected="">
                <option value="" selected="selected" disabled="disabled">
                  Product Development
                </option>
                <option value="1">Ocean Wall</option>
                <option value="2">Skate Park</option>
                <option value="3">Mountain View</option>
                <option value="4">Cityscape</option>
                <option value="5">Workshop</option>
              </Select>
              {/* <Select
                value={selectedOption3}
                onChange={this.handleChange3}
                options={option3}
                placeholder="Product Development"
              /> */}
            </DropDown>
          </DropDownMenu>
        </Container>
        <Hr/>
      </>
    );
  }
}

export default Navbar;
