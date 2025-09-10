//requiring the dotenv library
if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}
// console.log(process.env.CLOUD_NAME);

const express= require("express");
const app= express();
const path= require("path");
const PORT=process.env.PORT ||3000;
const mongoose= require("mongoose");
//method overiide
var methodOverride = require('method-override')
//ejsmate requiring
const ejsMate= require("ejs-mate");
//logger file using morgan
// const morgan= require("morgan");
// requiring the router listing.js
const listingRouter = require("./routes/listing.js");
const reviewRouter = require('./routes/review.js');
const userRouter = require("./routes/user.js");
// connecting to mongodb
// url ku hsm basically varaible me store kare
// let mongo_url= 'mongodb://127.0.0.1:27017/airbnb';
// making new atlasdb_url
const dburl= process.env.ATLASDB_URL;
let connect_db= async ()=>{
    try {
       await mongoose.connect(dburl);
    
    console.log("the mongodb is connected");

    } catch (e) {
       console.log(e.message,"some error in db");
       
    }
}
connect_db();


// requirng ExpressError.js
const ExpressError= require("./utils/ExpressError.js");
// requiring the flash
const flash = require("connect-flash");
//express session requiring
const session = require("express-session");
// mongostore 
const MongoStore = require('connect-mongo');
const store= MongoStore.create({
    mongoUrl:dburl,
    crypto:{
  secret:process.env.SECRET
    },
    touchAfter:24* 3600,
}
);
// function for sessionerror
store.on("error",()=>{
    console.log("error in mongodb session store ", err);
});
const sessionOptions = {
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+2*24*60*60*1000,
        maxAge:2*24*60*60*1000,
        httpOnly:true,
    },

   
};
//passport
const passport= require("passport");
const LocalStrategy= require("passport-local");
const User = require("./models/user.js");




// middleware for session
app.use(session(sessionOptions));
app.use(flash());
//passport middleware functions
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); 
//serialise and deserialize
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// ejs views setting
app.set("view engine","ejs");
app.set("views",path.join(__dirname,("/views")));
// public folder starategy
app.use(express.static(path.join(__dirname,("/public"))));
// parse the data
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
//ejs-mate for level up for ejs template
app.engine("ejs",ejsMate);
//using the morgan
// app.use(morgan("dev"));

app.get("/",((req,res)=>{
//     console.log("hell i am root");
//    console
res.redirect("/listings")
   
//     res.send("hello i am root");
    // res.send("hwllo i am a root")
}));
// middleware for session
// app.use(session(sessionOptions));
// app.use(flash());
app.use((req,res,next)=>{
    res.locals.success= req.flash("success");
    res.locals.error= req.flash("error");
    res.locals.currUser= req.user;
    next();
})

//demo user
// app.get("/demouser",async(req,res)=>{
//     let fakeuser= new User({
//         email:"studen@gmail.com",
//         username:"delta_student"
//     });
//     let registereduser= await User.register(fakeuser,"hello123");
//     console.log(registereduser);
//     res.send(registereduser);
// })
app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter)
app.use("/",userRouter);

//app.all() ka kaam hai koe bhi incoming req aarahi hai use check karna match hori  ya nhi bolke agar huwi to resposen send karna an nhi huwi to  error throw karna 
app.all("*",((req,res,next)=>{
   return  next( new ExpressError(404,"page not found"));
}))
//custom middleware handler // global middleware handler
app.use((err,req,res,next)=>{
    let{ statusCode =500, message="something went wrong"}= err;
   console.log(`the error is ${err.message}`);
// res.status(statusCode).send(message);
res.render("error.ejs",{err});
})
app.listen(PORT,(()=>{
    console.log("the app is listening on the port "+PORT);
}));


