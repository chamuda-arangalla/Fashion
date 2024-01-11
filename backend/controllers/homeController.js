
const Inventory = require("../models/Inventory")

// @desc GET GOALS
// @route GET api/goals
// @access Private
const getItems = async(req,res) => {
    try {
        const items = await Inventory.find()
        res.status(200).json(items)
    } catch (err) {
   
        res.status(500).json({ error: "Internal Server Error" ,message: err});
    }

}

// @desc SET GOAL
// @route POST api/goals
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

// @desc UPDATE GOAL
// @route PUT api/goals/id
// @access Private
const updateGoal = (req,res)=>{
    
    res.status(200).json({ messege:`update goal - ${req.params.id}` })
}

// @desc DELETE GOAL
// @route DELETE api/goals/id
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