const express = require("express");
const { defaultvalue, sendcontact, fetchdetails } = require("../controllers/userControllers");

const router = express.Router();

router.get("/",defaultvalue);
router.post("/senddetails", sendcontact);
router.get("/fetchdetails", fetchdetails);



module.exports = router;