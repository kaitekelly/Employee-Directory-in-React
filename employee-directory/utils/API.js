const BASEURL = "http://dummy.restapiexample.com/api/v1/employees";
import axios from "axios";
import React, {Component} from "react";
import Search from "./Search/index.js";
import Employee from "./Employee/index.js";

import axios from "axios";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};


// which search method should i use for the API search?


export default {
  getEmployeeByName: function(employee) {
    return axios.get("http://dummy.restapiexample.com/api/v1/employees/" + employee);
  },
  // Need to put in correct address to search by employee id
  getEmployeeById: function() {
    return axios.get("http://dummy.restapiexample.com/api/v1/employees");
  },
  getEmployeeList: function() {
    return axios.get("http://dummy.restapiexample.com/api/v1/employees")
  }
};



// var db = require("../models");

// module.exports = function(app) {
//   app.get("/api/Employees", function(req, res) {
//     db.Employee.find({}).then(function(dbEmployees) {
//       res.json(dbEmployees);
//     });
//   });

//   app.get("/api/Employees/:id", function(req, res) {
//     db.Employee.findById(req.params.id).then(function(dbEmployee) {
//       res.json(dbEmployee);
//     });
//   });


//   app.put("/api/Employees/:id", function(req, res) {
//     db.Employee.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbEmployee) {
//       res.json(dbEmployee);
//     });
//   });
// };