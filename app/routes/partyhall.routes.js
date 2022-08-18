
const Partyhall = require("../controllers/Partyhall.controller.js");

var router = require("express").Router();

router.post("/search", Partyhall.searchOne);
router.post("/create", Partyhall.create);
module.exports = router; 