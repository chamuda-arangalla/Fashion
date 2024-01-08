const getGoals = (req,res) => {
    res.status(200).json({ messege:"get goals" })
}

const setGoal = (req,res)=>{
    
    res.status(200).json({ messege:"set goal" })
}

const updateGoal = (req,res)=>{
    
    res.status(200).json({ messege:`update goal - ${req.params.id}` })
}

const deleteGoal = (req,res)=>{
    
    res.status(200).json({ messege:`delete goal - ${req.params.id}` })
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}