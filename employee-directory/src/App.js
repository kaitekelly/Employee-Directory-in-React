import React from 'react';
import logo from './logo.svg';
import './App.css';
import Directory from "./src/components/Directory.js"
import Search from "./components/Search/Search";
import Employee from "./components/Employee/Employee";
import Navbar from "./components/Footer/Footer";
import Footer from "./components/Footer/Footer";
import List from "./components/List/List"

// http://dummy.restapiexample.com/api/v1/employees


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
