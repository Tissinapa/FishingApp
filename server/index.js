import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import pool from "./data/dataDB.js";


const app = express();
dotenv.config();

app.use(cors());
app.use(express.json()); 

app.get("/", (req, res) => {
    res.send("Fishing App API is running 🎣");
});

(async ()=> {
    try{
        const result = await pool.query("SELECT NOW()");
        console.log("Database connected! curr time:", result.rows[0].now);
    }catch (err){
        console.error(err);
    }finally {
        pool.end();
    }
})();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));