import express from "express";
import dotenv from "dotenv";

// create an express server
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    //root route: http://localhost:3000/
    res.send("Server is ready now!!");
})

app.get("/api/auth/signup", (req, res) => {
    console.log("signup route");
})

app.get("/api/auth/login", (req, res) => {
    console.log("login route");
})

app.get("/api/auth/logout", (req, res) => {
    console.log("logout route");
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));