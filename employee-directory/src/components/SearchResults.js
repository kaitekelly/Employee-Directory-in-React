// import API from "../utils/API";
import React from "react";
import "./style.css";


function SearchResults(props) {
  return(
    // <ul className="list-group search-results">
    //   {props.employees.map(employee => (
    //     <ul key={employee} className="list-group-item">
    //       <h3>Employee Information:</h3>
    //       {/* <img alt="Employee" src={result} className="img-fluid" /> */}
    //       <li>{employee.name.first} </li>
    //       <li>{employee.name.last} </li>
    //       <li>{employee.phone} </li>
    //       <li>{employee.email} </li>
    //       {/* <li>{employee.dob} </li> */}
    //       {/* <img alt="employee-pict">  {employee.picture} </img> */}
    //     </ul>
        
    //   ))}
    //   </ul>
      
              <div>
                <table className="list-group search-results">
                <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                </thead>
                    {props.employees.map(employee => (
                      <tbody key={employee} className="list-group-item">
                        <tr>Employee Information:</tr>
                        {/* <img alt="Employee" src={result} className="img-fluid" /> */}
                        <td><img alt="employee-pic" src={employee.picture.medium} className="img-fluid" /></td>
                        <td>{employee.name.first} </td>
                        <td>{employee.name.last} </td>
                        <td>{employee.phone} </td>
                        <td>{employee.email} </td>
                        {/* <li>{employee.dob} </li> */}
                        {/* <img alt="employee-pict">  {employee.picture} </img> */}
                      </tbody>
                      
                    ))}
                </table>
            </div>

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

