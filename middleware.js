//isOwner server side validation
const Listing = require("./models/listing.js");
const Review= require("./models/reviews.js");


module.exports.isLoggedin= (req,res,next)=>{
  // console.log(req);
      if(!req.isAuthenticated()){
        // storing the original url before login
        if(req.method==="POST" && req.originalUrl.includes("reviews")){
          const listingid= req.params.id;
          req.session.redirectUrl=`/listings/${listingid}`;
        }else{
          req.session.redirectUrl = req.originalUrl;
        }
        // req.session.redirectUrl = req.originalUrl;
        console.log(req.originalUrl);
        req.flash("error","You Must be Logged in to Create a listing");
       return  res.redirect("/login");
    }
    next();
}
module.exports.savedRedirectUrl= (req,res,next)=>{
  if(req.session.redirectUrl){
    res.locals.redirectUrl= req.session.redirectUrl;
  }
  next();
}

module.exports.isOwner=async(req,res,next)=>{
  let {id}= req.params;
 let listing = await Listing.findById(id);
 if(!listing.owner._id.equals(res.locals.currUser._id)){
  req.flash("error","you are not the owner of this listing ");
  return res.redirect(`/listings/${listing.id}`);
 }
 next();
}

///reviee author middleware
module.exports.isreviewAuthor=async(req,res,next)=>{
  let {id,reviewId}= req.params;
 let review = await Review.findById(reviewId);
 if(!review.author._id.equals(res.locals.currUser._id)){
  req.flash("error","you are not the author of this review ");
  return res.redirect(`/listings/${id}`);
 }
 next();
}