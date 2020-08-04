import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from "./components/Employee/Employee";

import Directory from "./src/components/Directory.js"
import Search from "./components/Search/Search";
import Navbar from "./components/Footer/Footer";
import Footer from "./components/Footer/Footer";
import List from "./components/List/List"

// http://dummy.restapiexample.com/api/v1/employees


class App extends Component {
  state = {
    employees
  };

  removeEmployee = id => {
    const employees = this.state.friends.filter(friend => friend.id !== id);

    this.setState({ employees });
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        {this.state.employees.map(employee => (
          <Employee
          removeEmployee={this.removeEmployee}
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

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
