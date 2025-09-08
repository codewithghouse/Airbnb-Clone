const express = require("express");
const router = express.Router({mergeParams:true});
//requiring the wrapasycn.js
const wrapAsync= require("../utils/wrapasync.js");
// requirng ExpressError.js
const ExpressError= require("../utils/ExpressError.js");
const Review = require("../models/reviews.js");
//for post request
const Listing = require("../models/listing.js");
const { reviewSchema}= require("../schema.js");
//requiring islogged in
const {isLoggedin,isreviewAuthor}= require("../middleware.js");
// controllers requiring
const reviewControllers= require("../controllers/review.js");


//validate for reviews 
const validateReview =(req,res,next)=>{
    let {error}= reviewSchema.validate(req.body);
    if(error){
        //errors ke details ku print karne ka kaam hai 
    let errMsg = error.details.map((el)=> el.message).join(",");
         return next( new ExpressError(400,errMsg));
    }else{
        //agar error nhi ahi to smoth chlan webbsite hamari 
        next();
    }
   
}

//Review Post route
// reviews addding to the particular listing
router.post("/",isLoggedin,validateReview,wrapAsync(reviewControllers.createReview));
//REview Delete Route
// deleting the reviews from the individual listing
router.delete("/:reviewId",isLoggedin,isreviewAuthor,wrapAsync(reviewControllers.destroyReview))

module.exports = router;