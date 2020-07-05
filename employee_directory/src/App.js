import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees
  };

  removeEmployee = id => {
    const employees = this.employees.filter(employee => employee.id !== id);
    this.setState({ employees });
  };

  render() {
    return (
      <Wrapper>
        <Title>Employees List</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            position={employee.position}
            contact={employee.contact}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
