import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
    state = {
        search: "",
        employees: [],
        results: [],
        error: ""
    };

    componentDidMount() {
        API.getEmployeeByName()
        .then(res => this.setState({ employees: res.data.message}))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getEmployeeByName(this.state.search)
        .then(res => {
            if (res.data.status === "error") {
                throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: ""});
        })
        .catch(err => this.setState({ error: err.message }));
    };
    render() {
        return (
            <div>
                <Container style={{ minHeight: "80%"}}>
                    <h1 className="text-center"> Search Employee by Name</h1>
                    <Alert
                        type="danger"
                        style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
                    >
             {this.state.error}
                    </Alert>
                    <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    breeds={this.state.employees}
                    />
                <SearchResults results={this.state.results} />
            </Container>
        </div>
        );
    }
}

export default Search;