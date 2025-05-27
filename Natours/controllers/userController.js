
const getAllUsers = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "This route is not defined yet!",
    })
}

const createUser = (req, res) => {
    res.status(201).json({
        status: "success",
    })
}

const getSingleUser = (req, res) => {
    res.status(200).json({
        status: "success",
    })
}

const updateUser = (req, res) => {
    res.status(200).json({
        status: "success",
    })
}

const deleteUser = (req, res) => {
    res.status(204).json({
        status: "success",
    })
}


module.exports = {
    getAllUsers,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser
}