const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const pool  = require("./data/dataDB.js");
const authUsers = require("./routes/auth.js");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json()); 
app.use(cookieParser());
app.use("/auth", authUsers);

app.get("/", (req, res) => {
    res.send("Fishing App API is running 🎣");
});

if (process.env.NODE_ENV ==="development"){
    var corsOtions = {
        origin: "http://localhost:5000",
        optionsSuccessStatus: 200,
    } 
    app.use(cors(corsOtions))
}

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));