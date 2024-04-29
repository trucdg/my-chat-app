import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import {getUsersForSidebar} from "../controllers/user.controller.js";

const router = express.Router();

// call middleware protectRoute to ensure that
// unauthorized users can't call the getUsersForSidebar()
router.get("/", protectRoute, getUsersForSidebar);

export default router;