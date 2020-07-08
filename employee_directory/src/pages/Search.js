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
    order: "",
    filterList: []
  };

  componentDidMount() {
    API.getEmployee()
    .then(res => this.setState({ 
      result: res.data.results, 
      filterList: res.data.results }))
    .catch(err => console.log(err));
  }

  sortByName = () => {
    const list = this.state.filterList;
    if (this.state.order === "asc") {
        const sortList = list.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
        console.log(sortList)

        this.setState({
            filterList: sortList,
            order: "desc"
        })
    } else {
        const sortList = list.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
        console.log(sortList)
        this.setState({
            filterList: sortList,
            order: "asc"
        })
    }
}

  handleInputChange = (event) => {
    const result = this.state.result;
    const UserInput = event.target.value;
    const filterList = result.filter(employee => employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
    )
    this.setState({
      filterList
    });
};

employeeSearch = () => {
  API.getEmployee()
      .then(res => this.setState({
          filterList: res.data.results,
          result: res.data.results
      }))
      .catch(err => console.log(err))
}

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (!this.state.search) {
      alert("Enter a name")
      }
  const { result, search } = this.state;
  const filterList = result.filter(employee => employee.name.first.toLowerCase().includes(search.toLowerCase()));
  this.setState({
      filterList
  });
}

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
           //result={this.state.result}
           result={this.state.filterList} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
