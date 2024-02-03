const express = require('express');
const router = express.Router();
const {getItems,setItems,updateItem,deleteItem} = require("../controllers/homeController")



router.get("/",getItems)

router.post("/",setItems)

router.put("/:id",updateItem)

router.delete("/:id",deleteItem)

module.exports = router;