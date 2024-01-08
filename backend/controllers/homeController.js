// @desc GET GOALS
// @route GET api/goals
// @access Private
const getGoals = (req,res) => {
    
    res.status(200).json({ messege:"get goals" })
}

// @desc SET GOAL
// @route POST api/goals
// @access Private
const setGoal = (req,res)=>{
    console.log(req.body)
    res.status(200).json({ messege:"set goal" })
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
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}