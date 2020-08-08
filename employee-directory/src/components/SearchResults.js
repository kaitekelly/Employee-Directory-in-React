// import API from "../utils/API";
import React from "react";
import "./style.css";


function SearchResults(props) {
  return(
    <ul className="list-group search-results">
      {props.employees.map(employee => (
        <ul key={employee} className="list-group-item">
          <h3>Employee Information:</h3>
          {/* <img alt="Employee" src={result} className="img-fluid" /> */}
          <li>{employee.name.first} </li>
          <li>{employee.name.last} </li>
          <li>{employee.phone} </li>
          <li>{employee.email} </li>
          <li>{employee.name.first} </li>
        </ul>
      ))}
      </ul>
  );
}

export default SearchResults;



/* /* /* // import React, { useState, useEffect } from "react";

// export const SearchResults = () => { */  
//   const [search, setSearch] = useState();
//   const [employees, setEmployees] = useState([]);
//   const [results, setResults] = useState([]);
//   const [error, setError] = useState();

//   useEffect();

//   const searchEmployees = () => {
    
// }

// handleInputChange = event => {
//     const name = event.target.name;
//     const value = event.target.value;
//     this.setState({
//         [name]: value
//     });
// };

//  handleFormSubmit = event => {
//      event.preventDefault();
//      this.searchEmployees(this.state.search);
//  };
//     return (
//       <div>
//         <Search
//           search={search}
//           // handleFormSubmit={this.handleFormSubmit}
//           // handleInputChange={this.handleInputChange}
//         />
//         <SearchResults results={results} />
//       </div>
//     );
  

// };

// function SearchResults(props) {
//     return (
//         <ul className="list-group search-results">
//             {props.results.map(result => (
//                 <li key={result} className="list-group-item">
//                     <img alt={props.name} src={result} className="img-fluid" />
//                 </li>
//             ))}
//         </ul>
//     );
// }

