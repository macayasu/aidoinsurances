const express = require("express");
const router = express.Router();
const insurancesController = require("../controllers/insurances.controller");

// Show all insurances
router.get("/", insurancesController.findAll);
// Create a new insurances
router.post("/", insurancesController.create);
// Show a insurances with id
router.get("/:id", insurancesController.findById);
// Update a insurances with id
router.put("/:id", insurancesController.update);
// Delete a insurances with id
router.delete("/:id", insurancesController.delete);
module.exports = router;
