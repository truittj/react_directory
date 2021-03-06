import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="name">Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          type="text"
          className="form-control"
          placeholder="Employee First Name"
          id="employee"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-dark">
          Search
        </button>
        <button type="button" onClick={props.sortByName} className="btn btn-outline-dark">
          Sort by Employee First Name
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
