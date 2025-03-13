const express = require("express");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); 
const pool = require("../data/dataDB.js");
const {body, validationResult} = require("express-validator");

const router = express.Router();
const SECRET = process.env.JWT_SECRET;
dotenv.config();

router.post("/signup",
    [
        body("username").isLength({min: 3 ,max: 30}).trim().escape().withMessage("Username must be 3 - 30 char long"),
        body("email").isEmail().withMessage("Invalid email address"),
        body("password").isStrongPassword().withMessage("Password is not strong enough, use at least one number, capital letter and special character")

    ],
    
    async (req, res)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
          return res.send(errors.errors[0].msg);
        }
    try{
        const {username,email, password} = req.body; 

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        

        const newUser = await pool.query(
            "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3 ) RETURNING *", [username,email,hashedPassword]
        );
        //res.json(newUser.rows[0]);
        res.json({ message: "ok", user: newUser.rows[0] });
    }catch(error){
        res.status(500).json({error: error.message});
    }

});

router.post("/login", async (req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await pool.query("SELECT * FROM users WHERE email = $1",[email]);
        if(user.rows.length === 0 ) return res.status(400).json({error: "User not found"});

        const validPassword = await bcrypt.compare(password, user.rows[0].password_hash);
        if(!validPassword) return res.status(400).json({error: "Invalid password or email"});

        const token = jwt.sign({ id: user.rows[0].id}, SECRET, {expiresIn: "1h"});

        //res.json({token, user: user.rows[0]});
        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV ==='production',
            sameSite: "Strict",
            maxAge: 60 *60 * 1000,
        });
        res.json({message:"Logged in", token})
        
    }catch (error){
        res.status(500).json({error: error.message});
    }
})
/* const validateToken = function(req, res) {
    const authHeader = req.headers["authorization"]
} */
router.get("/validate",  async (req,res)=>{
    res.send("toimii");
})

module.exports = router;