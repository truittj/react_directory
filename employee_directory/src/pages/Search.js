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
    this.setState({ search: event.target.value });
  };

  filterEmployees = (searchkey) => {
    var filterResult = this.state.result.filter(person => person.name === searchkey)
    this.setState({ result:filterResult })  
  console.log(filterResult)
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const searchBar = this.state.search
    let filterResult = searchBar.filter(filterList => filterList.name === searchBar)
    this.setState(filterResult)
    console.log(filterResult)
    
      // .then(res => {
      //   if (res.data.status === "error") {
      //     throw new Error(res.data.message);
      //   }
      //   this.setState({ results: res.data.message, error: "" });
      // })
      // .catch(err => this.setState({ error: err.message }));
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
