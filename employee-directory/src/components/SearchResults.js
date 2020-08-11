import React from "react";
import "./style.css";


function SearchResults(props) {
  return(
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
                        <td><img alt="employee-pic" src={employee.picture.medium} className="img-fluid" /></td>
                        <td>{employee.name.first} </td>
                        <td>{employee.name.last} </td>
                        <td>{employee.phone} </td>
                        <td>{employee.email} </td>
                      </tbody>
                      
                    ))}
                </table>
            </div>

  );
}

export default SearchResults;
