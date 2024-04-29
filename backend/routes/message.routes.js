import express from "express";
import { sendMessage, getMessages} from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router  = express.Router();

router.get("/:id", protectRoute, getMessages); //get msgs between current user and the user with :id 
router.post("/send/:id", protectRoute, sendMessage); //send message between current user and the receiver with id

export default router;