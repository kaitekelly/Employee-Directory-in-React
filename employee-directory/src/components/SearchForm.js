import React from "react";
import {handleInputChange} from "./SearchContainer";
import "./style.css";

function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group input">
                <label htmlFor="employee">Employee Name: </label>
                <input
                onChange={this.handleInputChange}
                value={props.search}
                name="employee"
                list="employees"
                type="text"
                className="form-control"
                placeholder="Type in an employee name"
                id="search"
                />
                <datalist id="employees">
                    {props.employees.map(employee => (
                        <option value={employee} key={employee} />
                    ))}
                </datalist>
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
                </button>
            </div>
        </form>
    )
}

export default SearchForm;