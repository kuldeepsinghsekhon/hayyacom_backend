const receptionist = require("../controllers/receptionist.controller.js");
const events = require("../controllers/event.controller.js");
var router = require("express").Router();

// Create a new contact
router.post("/", receptionist.create);

// Retrieve all contacts
router.get("/all", receptionist.findAll);
// Retrieve all For Receptionist events
router.get("/events", events.findAll);
router.post("/eventcity", receptionist.eventcity);

// Retrieve a single contact with id
router.get("/:id", receptionist.findOne);

// Update a contact with id
router.patch("/:id", receptionist.update);

// Delete a contact with id
router.delete("/:id", receptionist.delete);

// Delete all contacts
router.delete("/", receptionist.deleteAll);

module.exports = router; 