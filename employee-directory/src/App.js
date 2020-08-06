import React, { useState, useEffect } from 'react';
import './App.css';
// import Employee from "./components/Employee/index";
// import SearchForm from "./components/Search/SearchForm";
// import {SearchResults} from "./components/Search/SearchResults";
import axios from "axios";

let employees = [];

const App = () => {
  const [employees, setEmployees] = useState([])
  useEffect(() =>{
    getData();
  })
  const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users?_limit")
    .then(res => setEmployees(res.data))
    .catch(error => console.log(error))
    
  }


  render() {
    return ( 
      <div>
        App
        </div>
      <Wrapper>
        <Title>Employee Directory</Title>
        {this.state.employees.map(employee => (
          <Employee
          // removeEmployee={this.removeEmployee}
          id={employee.id}
          key={employee.id}
          name={employee.name}
          email={employee.email}
          phone={employee.phone}
          />
        ))}
      </Wrapper>
    )
  }



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

  // const removeEmployee = id => {
  //   const employees = this.state.friends.filter(friend => friend.id !== id);

  //   this.setState({ employees });
  // };

export default App;
