const express = require("express");
const router = express.Router();
//requiring the wrapasycn.js
const wrapAsync= require("../utils/wrapasync.js");
// requirng ExpressError.js
const ExpressError= require("../utils/ExpressError.js");
//requiring the listing scehma object to validate every individual field before entering the data into the database
const {userSchema}= require("../schema.js");
const User = require("../models/user.js");
const passport= require("passport");
//requiring savedRedirectUrl
const {savedRedirectUrl}= require("../middleware.js");

// user controllers
const userController= require("../controllers/user.js");

//validate for users
const validateUser =(req,res,next)=>{
    let {error}= userSchema.validate(req.body);
    if(error){
        //errors ke details ku print karne ka kaam hai 
    let errMsg = error.details.map((el)=> el.message).join(",");
         return next( new ExpressError(400,errMsg));
    }else{
        //agar error nhi ahi to smoth chlan webbsite hamari 
        next();
    }
   
}
router.get("/signup",wrapAsync(userController.renderSignupform));

router.post("/signup",validateUser,wrapAsync(userController.signUp));

//login routes
router.get("/login",userController.renderLoginform);
//login post route
router.post("/login",savedRedirectUrl,passport.authenticate('local',{failureRedirect:'/login',failureFlash:true}),wrapAsync(userController.login));
//logout user 
router.get("/logout",userController.logoutUser)
module.exports = router;