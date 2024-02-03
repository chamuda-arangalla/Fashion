
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
const updateItem = async(req,res)=>{
    
  const id = req.params.id
  const body = req.body
  const itemId = Inventory.findById(req.params.id)
 try{

    if(!itemId){
      res.status(400).json({message:"Item not found!!"})
    }else{
      const updatedItem = await Inventory.findByIdAndUpdate( id , body )
      res.status(201).json({ message: "item updated successfully", updated_item: updatedItem})
    }
  }catch(err){
    res.status(500).json({ message: err.message })
  }
 
  
}

// @desc DELETE ITEM
// @route DELETE api/items/id
// @access Private
const deleteItem = async(req,res)=>{
    
    const id = req.params.id
    const itemId = Inventory.findById(id)


    try {
      const deletedItem = await Inventory.findByIdAndDelete(id)
      res.status(200).json({message:"Item deleted successfully", deleted_item : deletedItem})
    } catch (err) {
      res.status(500).send({ status: "Error with delete Product", error: err.message });
    }
}

module.exports = {
    getItems,
    setItems,
    updateItem,
    deleteItem,
}