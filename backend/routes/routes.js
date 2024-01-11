const express = require('express');
const router = express.Router();
const {getItems,setItems,updateGoal,deleteGoal,} = require("../controllers/homeController")



router.get("/",getItems)

router.post("/",setItems)

router.put("/:id",updateGoal)

router.delete("/:id",deleteGoal)

module.exports = router;