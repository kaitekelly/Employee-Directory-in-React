import React, { Component } from "react";
// import Title from "./Title";
import API from "../utils/API";
import EmployeeFile from "./EmployeeFile";
// import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";


class SearchContainer extends Component {
    state = {
        result: {},
        search: ""
    };

    componentDidMount() {
        API.searchEmployees()
        console.log()
        .then(res => this.setState({ employees: res.data.results }))
        .catch(err => console.log(err));
        
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    }

    render() {
        console.log(this.state.employees);
        // employees = (this.state.employees);
        return(
            <div className="employeefile">
                <h1>Employee Directory</h1>
            <EmployeeFile
            name={this.state.result.name}
            id={this.state.result.id}
            email={this.state.result.email}
            phone={this.state.result.phone}
            />
            <SearchResults results={this.state.results} />
            </div>
        )
   
    }




}

export default SearchContainer;