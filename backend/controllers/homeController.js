
const Inventory = require("../models/Inventory")

// @desc GET ITEMS
// @route GET api/items
// @access Private
const getItems = async(req,res) => {
    try {
        const items = await Inventory.find()
        res.status(200).json(items)
    } catch (err) {
   
        res.status(500).json({ error: "Internal Server Error" ,message: err});
    }

}

// @desc SET ITEM
// @route POST api/items
// @access Private
const setItems = async(req,res)=>{

  try {
    const newItem = new Inventory(req.body);
    await newItem.save();
    res.status(201).json({ message: "item added successfully", Item: newItem });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// @desc UPDATE ITEM
// @route PUT api/items/id
// @access Private
const updateGoal = (req,res)=>{
    
    res.status(200).json({ messege:`update goal - ${req.params.id}` })
}

// @desc DELETE ITEM
// @route DELETE api/items/id
// @access Private
const deleteGoal = (req,res)=>{
    
    res.status(200).json({ messege:`delete goal - ${req.params.id}` })
}

module.exports = {
    getItems,
    setItems,
    updateGoal,
    deleteGoal,
}