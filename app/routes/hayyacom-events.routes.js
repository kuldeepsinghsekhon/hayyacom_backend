
const Hayyacomevents = require("../controllers/Hayyacomevent.controller.js");

var router = require("express").Router();
//router.post("/all", Hayyacomevents.findAll);

// Create a new event
router.post("/create", Hayyacomevents.create)
// (req, res) => {
//     const formData = req.body;
//     console.log('form data', formData);
//     console.log(req.files);
//     res.sendStatus(200);
//   });
router.post("/", Hayyacomevents.findAll);
router.get("/:id", Hayyacomevents.findOne);
router.post("/search", Hayyacomevents.searchOne);
router.post("/update", Hayyacomevents.update);
/*
// Retrieve all events


// Retrieve a single event with id
router.get("/:id", events.findOne);

// Update a event with id
router.patch("/:id", events.update);

// Delete a event with id
router.delete("/:id", events.delete);

// Delete all events
router.delete("/", events.deleteAll);
*/
module.exports = router; 