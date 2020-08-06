import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";


class SearchContainer extends Component {
    state = {
        result: {},
        search: ""
    };

    componentDidMount() {
        this.searchEmployees("");
    }

    searchEmployees = query => {
        API.search(query)
        .then(res => this.setState({ result: res.data }))
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
        
    }




}

export default SearchContainer;