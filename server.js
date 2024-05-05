const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());


connectDB();

// routes

app.use("/api/v1/user",userRoutes);


//listen

const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})