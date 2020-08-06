const BASEURL = "https://jsonplaceholder.typicode.com/users?_limit";
import axios from "axios";
import React, {Component} from "react";


export default {
  search: function(query) {
    return axios.get(BASEURL);
  }
};


// which search method should i use for the API search?


// export default {
//   getEmployeeByName: function(employee) {
//     return axios.get("http://dummy.restapiexample.com/api/v1/employees/" + employee);
//   },
//   // Need to put in correct address to search by employee id
//   getEmployeeById: function() {
//     return axios.get("http://dummy.restapiexample.com/api/v1/employees");
//   },
//   getEmployeeList: function() {
//     return axios.get("http://dummy.restapiexample.com/api/v1/employees")
//   }
// };


