const eventreceptionist = require("../controllers/eventreceptionist.controller.js");

var router = require("express").Router();

// Create a new contact
router.post("/", eventreceptionist.create);

router.post("/all", eventreceptionist.eventreceptionists);


module.exports = router; 