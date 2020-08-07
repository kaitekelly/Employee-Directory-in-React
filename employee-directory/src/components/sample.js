import React, { Component } from "react";
import SearchEmployee from "./SearchEmployee"
import EmployeeDetail from "./EmployeeDetail"
import "./styles.css";
import API from "../utils/API";
class EmployeeDiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            employees: [],
            results: [],
            error: null,
        };
    }
    componentDidMount() {
        API.searchEmployee()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    }
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployee(this.state.search);
    };
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };
    render() {
        console.log(this.state.employees);
        // const  employees  = this.state;
        return (
            <div className="headerDiv">
                <h1>Search an employee</h1>
                <h2>Type in a name</h2>
                <SearchEmployee
                    employees={this.state.employees}
                />
                <EmployeeDetail
                    employees={this.state.employees}
                />
            </div>
        );
    }
}
export default EmployeeDiv;



//SearchEmployee

import React from "react";
import "./styles.css";
function SearchEmployee(props) {
  return (
    <ul className="list-group search-results">
    {props.cat.map(employee => (
      <li key={employee} className="list-group-item">
        <p>{employee.name.first}</p>
        <p>{employee.phone}</p>
        <p>{employee.email}</p>
        <img alt="avatar" src={employee.picture.large} className="img-fluid" />
      </li>
    ))}
  </ul>
  );
}
export default SearchEmployee;