let API = "http://dummy.restapiexample.com/api/v1/employees";


// var db = require("../models");

module.exports = function(app) {
  app.get("/api/Employees", function(req, res) {
    db.Employee.find({}).then(function(dbEmployees) {
      res.json(dbEmployees);
    });
  });

  app.get("/api/Employees/:id", function(req, res) {
    db.Employee.findById(req.params.id).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });


  app.put("/api/Employees/:id", function(req, res) {
    db.Employee.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });
};