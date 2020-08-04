import React from "react";
import "./style.css";

function EmployeeFile(props) {
    return (
        <div className="emp-file">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>

            <div className="emp-info">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Employee ID:</strong> {props.id}
                    </li>
                    <li>
                        <strong>Email Address:</strong> {props.email}
                    </li>
                    <li>
                        <strong>Phone Number:</strong> {props.phone}
                    </li>
                </ul>
            </div>
            <span onClick={() => props.removeEmployee(props.id)} className="remove">
        𝘅
      </span>
        </div>
    )
}

export default EmployeeFile;