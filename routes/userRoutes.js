import express from "express"
import {createUser,readAllUser,readSingleUser,updateUser,deleteUser} from "../controllers/userController.js"
// router object
const router = express.Router();

// routes

// create User || POST
router.post('/create-user', createUser);

// READ (Get) User || GET
router.get('/read-user', readAllUser);

// READ (Get) Single USer || GET
router.get('/read-user/:id', readSingleUser);

// update (put) user || PUT
router.put('/update-user/:id', updateUser);

// Delete (delete) user || DELETE
router.delete('/delete-user/:id', deleteUser);

export default router;