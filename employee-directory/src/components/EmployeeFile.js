import React from "react";
import "./style.css";

function EmployeeFile(props) {
    return (
        <div className="emp-file">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>

            <div>
                <ul className="emp-info">
                    <li>
                        <strong>Name: {props.name}</strong> 
                    </li>
                    <li>
                        <strong>Employee ID: {props.id}</strong> 
                    </li>
                    <li>
                        <strong>Email Address: {props.email}</strong> 
                    </li>
                    <li>
                        <strong>Phone Number: {props.phone}</strong> 
                    </li>
                </ul>
            </div>
            {/* <span onClick={() => props.removeEmployee(props.id)} className="remove">
        𝘅
      </span> */}
        </div>
    )
}

export default EmployeeFile;