import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

// create an express server
const app = express();
dotenv.config();

// variables
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json()); //parse the incoming requests with json payloads (from req.body)
app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//     //root route: http://localhost:3000/
//     res.send("Server is ready now!!");
// })


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on ${PORT}`);
});