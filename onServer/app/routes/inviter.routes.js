
const {create,findAll,findOne,searchOne,createPreviewInviter,searchOnePreview,SearchByMobile} = require("../controllers/Inviter.controller.js");

var router = require("express").Router();
//router.post("/all", Hayyacomevents.findAll);
const multer = require('multer');
const upload = multer({
    //dest: "/temp"
	 dest: "/home/tarneem/Hayyacom/public/photo/iflowerinvitation"
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
  });
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
module.exports = router; 