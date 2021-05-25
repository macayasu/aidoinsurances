"use strict";
const insurances = require("../models/insurances.model");

exports.findAll = function (req, res) {
  insurances.findAll(function (err, insurances) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", insurances);
    res.send(insurances);
  });
};

exports.create = function (req, res) {
  const new_insurances = new insurances(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "Tolong lengkapi datanya!" });
  } else {
    insurances.create(new_insurances, function (err, insurances) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "insurances sukses di tambahkan!",
        data: insurances,
      });
    });
  }
};

exports.findById = function (req, res) {
  insurances.findById(req.params.id, function (err, insurances) {
    if (err) res.send(err);
    res.json(insurances);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "Tolong lengkapi datanya!" });
  } else {
    insurances.update(
      req.params.id,
      new insurances(req.body),
      function (err, insurances) {
        if (err) res.send(err);
        res.json({ error: false, message: "insurances sukses di update!" });
      }
    );
  }
};

exports.delete = function (req, res) {
  insurances.delete(req.params.id, function (err, insurances) {
    if (err) res.send(err);
    res.json({ error: false, message: "insurances sukses di hapus" });
  });
};
