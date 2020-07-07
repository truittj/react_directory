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
    search: "",
    order: "descend"
  };

  componentDidMount() {
    API.getEmployee()
    .then(res => this.setState({ result: res.data.results }))
    .catch(err => console.log(err));
  }

  searchEmployee = () => {
    API.getEmployee()
      .then(res => this.setState({ result: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    this.searchEmployee(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
          </Col>
        </Row>
        <Row>
          <Col size="md">
           <SearchResults 
           result={this.state.result} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
