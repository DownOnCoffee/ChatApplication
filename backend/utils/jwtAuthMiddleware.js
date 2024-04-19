import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
// import { sign } from "jsonwebtoken";
const jwtAuthMiddleware=async (req,res,next)=>{
    try{

        // const token=req.cookies.jwt;
        const token=req.headers.authorization.split(' ')[1];
        // console.log(token,"tokennnn");
        if(!token){
            return res.status(401).json({error:'unauthorized:no token provided'});
        }
        const decoded=jwt.verify(token,process.env.SECRET_KEY);

        if (!decoded){
            return res.status(401).json({error:'unauthorized: Invalid Token'});
        }

        const user=await User.findById(decoded.userdata).select("-password");
        req.user=user;
        
       
        next();

    }catch(err){
        console.log(err);
        res.status(500).json({error:err});
    }

}
export default jwtAuthMiddleware;