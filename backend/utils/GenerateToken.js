import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();
const generateToken=(userdata,res)=>{
    if (!userdata) {
        throw new Error('User data is required for token generation.');
    }
    const token = jwt.sign({userdata}, process.env.SECRET_KEY);
      const cookie= res.cookie('jwt', token, {
      sameSite: 'None',path: '/api',httpOnly: false,
      secure: false, 
      sameSite: 'Lax', });
    return token;

};

export default generateToken;