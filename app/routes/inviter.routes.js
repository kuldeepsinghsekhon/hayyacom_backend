
const {create,findAll,findOne,searchOne,createPreviewInviter,searchOnePreview,SearchByMobile,delete_invitations,get_guestlists} = require("../controllers/Inviter.controller.js");

var router = require("express").Router();
//router.post("/all", Hayyacomevents.findAll);
const multer = require('multer');
let pathurl='/Users/hekin/Desktop/hayyacom/hayyacom-watsapp-dev/wedding-invitation-dev-localhost/frontend-receptionist/public/temp/'

const upload = multer({
    dest:pathurl // "/temp"
   // dest: "/home/tarneem/Hayyacom/public/photo/iflowerinvitation/temp"
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
  });
// Create a new event
router.post("/create",upload.single("file"), create)
router.post("/create_inviter_preview",upload.single("file"), createPreviewInviter)
// (req, res) => {
//     const formData = req.body;
//     console.log('form data', formData);
//     console.log(req.files);
//     res.sendStatus(200);
//   });
router.post("/", findAll);
router.get("/:id", findOne);
router.post("/search", searchOne);
router.post("/serach_by_mobile",SearchByMobile)
router.post("/searchpreview", searchOnePreview);
// Delete all users
router.get("/guestlists/:invitermobile", get_guestlists);
router.get("/delete_invitations/:SN/:eventid", delete_invitations);
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