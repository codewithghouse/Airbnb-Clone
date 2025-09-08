const User= require("../models/user.js");

// render signup form
module.exports.renderSignupform=(req,res)=>{
 res.render("./users/signup.ejs");
};
// signup
module.exports.signUp= async(req,res)=>{
   try{
     let {username ,email,password}=req.body;
    let newUser = new User({username,email});
    let registerUser= await User.register(newUser,password);
    console.log(registerUser);
    //   req.flash("success","welcome to Airbnb");
    // res.redirect("/listings");
//   automatic login setup
  req.login(registerUser,(err)=>{
    if(err){
        next(err);
    }
      req.flash("success","welcome to Airbnb");
    res.redirect("/listings");
  })
   }catch(e){
    req.flash("error",e.message);
    res.redirect("/signup");
   }
};

// render login form
module.exports.renderLoginform=async(req,res)=>{
    res.render("./users/login.ejs");
};

// login route
module.exports.login=async(req,res)=>{
   
 req.flash("success","welcome to airbnb ! You are Logged In ")
 let redirect= res.locals.redirectUrl || "/listings";
 res.redirect(redirect);
};

// logout user
module.exports.logoutUser=async(req,res,next)=>{
    console.log(req.user);
    req.logOut((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","You are Logged Out");
        res.redirect("/listings");
    })
 
};