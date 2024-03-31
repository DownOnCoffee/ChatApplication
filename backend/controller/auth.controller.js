 
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/GenerateToken.js";

 
 //functions when are called on their respective routes

 let currentUser = '';
 export const signup= async(req,res)=>{
    try{
        //checking user info
        const {username,password,fullName,gender,confirmPass}=req.body; //you request all of these from req body

        if (password!=confirmPass){
            return res.status(400).json({error:"passwords dont match!"})
        }
        const existingUser=await User.findOne({username});
        if (existingUser){
           return res.status(400).json({error:"Username already exists"});
        }

        //Check done, now let's save new user information
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        //HASH PASSWORD
        const salt=await bcrypt.genSalt(10);
        const hashpassword=await bcrypt.hash(password,salt);
     
        // create a new user document in the MongoDB database using Mongoose
        const newUser=await new User({
            fullName,username,password:hashpassword,gender,profilePic:gender=='female'?girlProfilePic:boyProfilePic ,     
        });

        //if correct user data is sent then ...
        
        if (newUser){
        const Token=await generateToken(newUser._id,res);
        await newUser.save();          //save data

        currentUser = newUser.username;

        //success response                       
        res.status(200).json({
            _id:newUser,
            username:newUser.username,
            fullName:newUser.fullName,
        });
        }
        else{
            return res.status(400).json({error:'Inavlid user data '});
        }
        

    }catch(err){
        console.log(err);
        res.status(500).json({error:"error in saving user information"});

    }
   

 }
 export const login= async (req,res)=>{
    try{
        const {username,password}=req.body;
        const userExists=await User.findOne({username});
        const passwordMatch= await bcrypt.compare(password, userExists?.password || ""); //if username doesnt exist so we set password to empty string so in comparing it returns false
        if (!userExists || !passwordMatch){
            return res.status(400).send('Invalid username or password');
        }
        generateToken(userExists._id,res);  

        currentUser = userExists.username;

        res.status(201).json({
            username:userExists.username,
            fullName: userExists.fullName,
        });
    }catch(err){
        console.log(err);
        res.status(500).json({error:"error in saving user information"});
    }
    

 }
 export const logout =(req,res)=>{
    try {
		res.cookie("jwt", "", { maxAge: 0 });   //DELETING or expiring the cookie for logout
        currentUser = '';
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}

 }
 export const logininfo=async (req,res)=>{
    try{
        currentUser==''?res.send('Please Log in !'): res.send(currentUser);
       

    }catch(err){
        console.log(err);
        res.status(500).json({error:err});

    }
    
   
 }