const express = require("express");
const router = express.Router();

router.use("/v1", require("./v1"));
router.get("/",function(req,res){
    res.end("Uttkarsh Saini")
})
module.exports = router;
