const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const pool  = require("./data/dataDB.js");
const authUsers = require("./routes/auth.js");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json()); 
app.use("/auth", authUsers);

app.get("/", (req, res) => {
    res.send("Fishing App API is running 🎣");
});

/*(async ()=> {
    try{
        const result = await pool.query("SELECT NOW()");
        console.log("Database connected! curr time:", result.rows[0].now);
    }catch (err){
        console.error(err);
    }finally {
        pool.end();
    }
})();*/

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));