import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

import API from "../utils/API";

class Search extends Component {
  state = {
    result: [],
    search: ""
  };

  componentDidMount() {
    // this.searchEmployee();
    API.getEmployee()
    .then(res => this.setState({ result: res.data.results }))
    .catch(err => console.log(err));
  }

  searchEmployee = () => {
    API.getEmployee()
      .then(res => this.setState({ result: res.data.results }))
      .catch(err => console.log(err));
  };

  // handleInputChange = event => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.searchMovies(this.state.search);
  // };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            
          </Col>
          <Col size="md-4">
            
              {/* <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              /> */}
           <SearchResults 
           result={this.state.result} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
