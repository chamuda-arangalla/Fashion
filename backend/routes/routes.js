const express = require('express');
const router = express.Router();

//get
router.get("/",(req,res)=>{
    
    res.status(200).json({ messege:"get goals" })
})

router.post("/",(req,res)=>{
    
    res.status(200).json({ messege:"check post" })
})
module.exports = router;