// const BASEURL = "https://jsonplaceholder.typicode.com/users?_limit";
import axios from "axios";
// import React, {Component} from "react";


// export default {
//   search: function(query) {
//     return axios.get(BASEURL);
//   }
// };

// which search method should i use for the API search?


export default {
  searchEmployees: function() {
    return axios.get("https://randomuser.me/api/?pretty?page=3&results=10&seed=abc")
  },
  getEmployeeByName: function() {
    return axios.get("https://randomuser.me/api/?pretty?page=3&results=10&seed=abc");
  },
  // Need to put in correct address to search by employee id
  getEmployeeById: function() {
    return axios.get("https://randomuser.me/api/?pretty?page=3&results=10&seed=abc");
  }

};


