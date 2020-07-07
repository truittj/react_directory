import React, { useState, useEffect } from "react";	
import API from "../utils/API";
import Container from "../components/Container";


const Search = () => {
  const [developerState, setDeveloperState] = useState({
      users: [],
      order: "descend",
      filteredUsers: [],
      headings: [
          { name: "Image", width: "10%", order: "descend" },
          { name: "name", width: "10%", order: "descend" },
          { name: "phone", width: "20%", order: "descend" },
          { name: "email", width: "20%", order: "descend" },
          { name: "dob", width: "10%", order: "descend" }
          ]
      });

      useEffect(() => {
        API.getUsers().then(results => {
        console.log(results.data.results);
    setDeveloperState({
        ...developerState, 
        users: results.data.results,
        filteredUsers: results.data.results
            });
        });
	}, []);
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search for an employee!</h1>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            employeeName={this.state.employeeName}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }

export default Search;
