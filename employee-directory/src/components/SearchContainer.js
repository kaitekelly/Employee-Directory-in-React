import React, { Component } from "react";
import API from "../utils/API";
import SearchResults from "./SearchResults";
import SearchForm from "./SearchForm";
import { Container } from "react-bootstrap";

class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            results: [],
            employees: [],
            sortType: "asc",
            filtered: [],
            error: null
        };

    }
    
    componentDidMount() {
        API.searchForm()
        .then(res => this.setState({ employees: res.data.results, filtered: res.data.results }))
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        let currentList = [];
        let newList = [];

        if (event.target.value !== ""){
            currentList = this.state.employees;

            newList = currentList.filter(employee => {
                const lc = employee.name.first.toLowerCase();
                const filter = event.target.value.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = this.state.employees;
        } 
            this.setState({
                filtered: newList
            });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchForm(this.state.search);
    }

    onSort = sortType =>{
        this.setState({sortType})
    }

    onChange = e =>{
        this.setState({ search : e.target.value });
    }

    render() {
        const {employees, sortType } = this.state;
        const sorted = employees.sort((a, b) => {
            const isReversed = (sortType === 'asc') ? 1 : -1;
            return isReversed * a.name.first.localeCompare(b.name.first)
        });

        console.log(this.state.employees);
        return(
            <div className="employeefile">
            <Container>
                <h1>Employee Directory</h1>
            
            <SearchForm
                employees={this.state.employees}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
            />
            <SearchResults 
            employees={this.state.filtered} 
            />

                <button type="submit" onClick={() => this.onSort('asc')} 
                employee={employees} 
                onSort={this.onSort} 
                sortType={sorted} 
                className="btn btn-success">
                    Sort by ASC Order
                </button>
                <button type="submit" onClick={() => this.onSort('desc')} className="btn btn-success">
                    Sort by DESC Order
                </button>
                </Container>
            </div>
        );
    }
}

export default SearchContainer;