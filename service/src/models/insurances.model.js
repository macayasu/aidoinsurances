"use strict";
var dbConn = require("../../config/db.config");
//insurances object create
var insurances = function (insurances) {
  this.name = insurances.name;
  this.active = insurances.active ? insurances.active : 1;
  this.created_at = new Date();
  this.updated_at = new Date();
};

insurances.create = function (newEmp, result) {
  dbConn.query("INSERT INTO insurances set ?", newEmp, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
insurances.findById = function (id, result) {
  dbConn.query(
    "Select * from insurances where id = ? ",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
insurances.findAll = function (result) {
  dbConn.query("Select * from insurances", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("insurances : ", res);
      result(null, res);
    }
  });
};
insurances.update = function (id, insurances, result) {
  dbConn.query(
    "UPDATE insurances SET name=?,active=? WHERE id = ?",
    [insurances.name, insurances.active, id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
insurances.delete = function (id, result) {
  dbConn.query(
    "DELETE FROM insurances WHERE id = ?",
    [id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
module.exports = insurances;
