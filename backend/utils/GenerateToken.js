import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

const generateToken=(userdata,res)=>{
    if (!userdata) {
        throw new Error('User data is required for token generation.');
    }
    const token = jwt.sign({userdata}, process.env.SECRET_KEY, {
        expiresIn: '15d' // 1 week
      });
    res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development",
	});
    return token;
};

export default generateToken;