const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const SECRET = process.env.JWT_SECRET;
dotenv.config();


const authenticate = (req, res, next) =>{
    const token = req.cookies.auth_token || req.headers.authorization?.split(" ")[1];
    // if there is not token in cookies
    if(!token){
        return res.status(401).json({error: "Unauthorized - no token"});
    }
    try{
        const verified = jwt.verify(token, SECRET);
        req.user  =verified;
        next();
    } catch(error){
        res.status(403).json({error: "no token available"})

    }
}

module.exports = authenticate;