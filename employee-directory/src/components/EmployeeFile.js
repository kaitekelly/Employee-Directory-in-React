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
            {/* <span onClick={() => props.removeEmployee(props.id)} className="remove">
        𝘅
      </span> */}
        </div>

        // <div>
        //     <Table striped bordered hover>
        //     <thead>
        //         <tr>
        //         <th>#</th>
        //         <th>First Name</th>
        //         <th>Last Name</th>
        //         <th>Phone</th>
        //         <th>Email</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //         <td>1</td>
        //         <td>Mark</td>
        //         <td>Otto</td>
        //         <td>@mdo</td>
        //         </tr>
        //         <tr>
        //         <td>2</td>
        //         <td>Jacob</td>
        //         <td>Thornton</td>
        //         <td>@fat</td>
        //         </tr>
        //         <tr>
        //         <td>3</td>
        //         <td colSpan="2">Larry the Bird</td>
        //         <td>@twitter</td>
        //         </tr>
        //     </tbody>
        //     </Table>

        // </div>
    )
}

export default EmployeeFile;