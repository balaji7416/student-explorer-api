import express from "express"
const router = express.Router();

import {
    getAllUsers,
    getUserById,
    addUser,
    updateUserbyId,
    deleteUserbyId
} from "../controllers/studentController.js";

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", addUser);
router.put("/:id",updateUserbyId);
router.delete("/:id", deleteUserbyId);

export default router;