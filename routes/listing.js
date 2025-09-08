const express= require("express");
const router= express.Router();
//requiring the wrapasycn.js
const wrapAsync= require("../utils/wrapasync.js");
// requirng ExpressError.js
const ExpressError= require("../utils/ExpressError.js");
//requiring the listing scehma object to validate every individual field before entering the data into the database
const {listingSchema}= require("../schema.js");
const Listing = require("../models/listing.js");
//requiring passport
const passport= require("passport");
//requiring the logged in middleware
const {isLoggedin,isOwner}= require("../middleware.js");

// requiring Listing controllers
const listingControllers= require("../controllers/listing.js");

// validate listing function for the joi
const validateListing =(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    console.log(req.body);
    if(error){
        //errors ke details ku print karne ka kaam hai 
    let errMsg = error.details.map((el)=> el.message).join(",");
         return next( new ExpressError(400,errMsg));
    }else{
        //agar error nhi ahi to smoth chlan webbsite hamari 
        next();
    }
   
}
// using multer for parsing the multipart/form-data
const multer  = require('multer')
const {storage}= require("../cloudConfig.js");
const upload = multer({storage });


//implementing the router route
// jis jis route ke same path hai ham usku combine karne wale hai
// yaani index route and create post route req bhejre / pe isliye ham combine kardiye inku sabku
router.route("/").get(wrapAsync(listingControllers.index))
.post(isLoggedin,upload.single('listing[image]'),validateListing,wrapAsync(listingControllers.createListing));
// .post(upload.single('listing[image]'),(req,res)=>{
//     res.send(req.file);
//     // res.send(req.body);
// })
// // all listing data
// router.get("/",wrapAsync(listingControllers.index));

// NEW Route
router.get("/new",isLoggedin,listingControllers.renderNewform);
// // CREATE Route
// router.post("/",isLoggedin, validateListing,wrapAsync(listingControllers.createListing))

// show and update route 
router.route("/:id").get(wrapAsync(listingControllers.showListing))
.put(isLoggedin,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingControllers.updateListing)).delete(isLoggedin,isOwner,wrapAsync(listingControllers.destroyListing));
// // show route
// router.get("/:id",wrapAsync(listingControllers.showListing));

//Edit route
router.get("/:id/edit",isLoggedin,isOwner,wrapAsync(listingControllers.renderEditform));
// //Update route 
// router.put("/:id",isLoggedin,isOwner,validateListing,wrapAsync(listingControllers.updateListing));

// //DELETE route/path
// router.delete("/:id",isLoggedin,isOwner,wrapAsync(listingControllers.destroyListing));

module.exports= router;