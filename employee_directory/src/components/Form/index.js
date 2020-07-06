import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out employye's first or last name to search");
    };
  

    this.setState({
      firstName: "",
      lastName: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="container-fluid">
        <div className="row"><p>
          Search for an employee by:
        </p>
        </div>
        <form className="form row">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <button onClick={this.handleFormSubmit}>Seacrh</button>
        </form>
      </div>
    );
  }
}

export default Form;
