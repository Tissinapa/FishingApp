const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const pool  = require("./data/dataDB.js");
const authUsers = require("./routes/auth.js");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config();


app.use(express.json()); 
app.use(cookieParser());

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true, // Allow cookies to be sent if needed
    optionsSuccessStatus: 200,
}; 

app.use(cors(corsOptions));

app.use("/auth", authUsers);

app.get("/", (req, res) => {
    res.send("Fishing App API is running 🎣");
});

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));