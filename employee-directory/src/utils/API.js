import axios from "axios";


export default {
  searchEmployees: function() {
    return axios.get("https://randomuser.me/api/?pretty?page=3&results=10&seed=abc")
  },
  searchForm: function() {
    return axios.get("https://randomuser.me/api/?pretty?page=3&results=10&seed=abc")
  },
  getEmployeeByName: function() {
    return axios.get("https://randomuser.me/api/?pretty?page=3&results=10&seed=abc");
  },
  getEmployeeById: function() {
    return axios.get("https://randomuser.me/api/?pretty?page=3&results=10&seed=abc");
  }

};
