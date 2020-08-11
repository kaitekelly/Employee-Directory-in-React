import React from "react";
import "./style.css";

function EmployeeFile(props) {
    return (
        <div className="emp-file">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>

            <div>
                <table className="emp-info">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                </thead>
                    <th>
                        <strong>Name: {props.name}</strong> 
                    </th>
                    <th>
                        <strong>Employee ID: {props.id}</strong> 
                    </th>
                    <th>
                        <strong>Email Address: {props.email}</strong> 
                    </th>
                    <th>
                        <strong>Phone Number: {props.phone}</strong> 
                    </th>
                </table>
            </div>
        </div>
    )
}

export default EmployeeFile;