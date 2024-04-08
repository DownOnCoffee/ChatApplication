import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

const generateToken=(userdata,res)=>{
    if (!userdata) {
        throw new Error('User data is required for token generation.');
    }
    const token = jwt.sign({userdata}, process.env.SECRET_KEY, {
        expiresIn: '15d' // 1 week
      });
      const cookie=res.cookie('jwt',token, { httpOnly: true, secure: true });
      console.log(cookie,"cookie");
      
	// res.cookie("jwt", token, {
	// });
    // console.log("Cookie 'jwt' has been set:", token);
    
    return token;

};

export default generateToken;