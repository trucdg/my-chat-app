import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";

// create an express server
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    //root route: http://localhost:3000/
    res.send("Server is ready now!!");
})

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));