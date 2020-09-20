import React from "react";
import { Table } from "react-bootstrap";
import "./style.css";


function SearchResults(props) {
  return(
              <div>
              <Table>
                <table className="list-group search-results">
                <thead>
                <tr className="table-header">
                    <th className="th">Picture</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                </thead>
                    {props.employees.map(employee => (
                      <tbody key={employee} className="list-group-item">
                        <tr>  </tr>
                        <td><img alt="employee-pic" src={employee.picture.medium} className="img-fluid" /></td>
                        <td>{employee.name.first} </td>
                        <td>{employee.name.last} </td>
                        <td>{employee.phone} </td>
                        <td>{employee.email} </td>
                      </tbody>
                      
                    ))}
                </table>
                </Table>
            </div>

  );
}

export default SearchResults;
