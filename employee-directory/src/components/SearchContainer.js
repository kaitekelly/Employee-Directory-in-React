import React, { Component } from "react";
// import Title from "./Title";
import API from "../utils/API";
import EmployeeFile from "./EmployeeFile";
// import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import SearchForm from "./SearchForm";


class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            results: [],
            employees: [],
            error: null
        };
    }
    
    componentDidMount() {
        API.searchForm()
        .then(res => this.setState({ employees: res.data.results }))
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchForm(this.state.search);
    }

    render() {
        console.log(this.state.employees);
        // employees = (this.state.employees);
        return(
            <div className="employeefile">
                <h1>Employee Directory</h1>
            
            <SearchForm
                employees={this.state.employees}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
            />
            <SearchResults 
            employees={this.state.employees} 
            />
            <EmployeeFile
                employees={this.state.employees}
            />
            </div>
        );
    }
}

export default SearchContainer;