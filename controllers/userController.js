import userModel from "../models/userModel.js"

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.create({
            name, email, password
        });
        res.status(201).json({
            message: 'success',
            user
        });

    } catch (error) {
        console.log(`Error in creating user : ${error}`);
        res.status(400).json({
            message: false,
            error
        });
    }
};

export const readAllUser = async (req, res) => {
    try {
        const users = await userModel.find({});
        res.status(200).json({
            success: true,
            totalUsers: users.length,
            users
        });
    } catch (error) {
        console.log(`Error in Reading User : ${error}`);
        res.status(400).json({
            success: false,
            msg: "error in reading User",
            error: error.message
        });
    }
};

export const readSingleUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (user) {
            res.status(200).json({
                success: true,
                user,
            });
        } else {
            res.status(400).json({
                success: false,
                msg: " User Not Found"
            });
        }
       
    } catch (error) {
        res.status(400).json({
            success: false,
            msg: "error in reading Single user",
            error: error.message
        });
    }
};

export const updateUser = async (req, res) => {
    
    const user = await userModel.findById(req.params.id);
    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if (req.body.password) {
            user.password = req.body.password
        }
        const updatedUser = await user.save();
        res.status(201).json({
            success: true,
            msg: "data is updated"
        });
    }
    else {
        res.status(400).json({
            success: false,
            msg: "error to updated",
            error
        });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModel.findById(userId);
  
        if (!user) {
            return res.status(404).json({
                message: "user not found"
            });
        }

        await user.deleteOne();
        res.status(200).json({
            message: 'User deleted successfully'
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error'
        });
      }
};