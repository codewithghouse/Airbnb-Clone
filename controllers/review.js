const Review= require("../models/reviews.js");
const Listing= require("../models/listing.js");

// create review route // post route
module.exports.createReview=async(req,res)=>{
    let {id}= req.params;
let listing = await Listing.findById(id);
let newReview = new Review(req.body.review);
//har review ke sath current user ki info store karrain yahan pe 
newReview.author= req.user._id;
listing.reviews.push(newReview);

await newReview.save();
await listing.save();
console.log(listing);
 req.flash("success","Review Added");
//   let redirect= res.locals.redirectUrl ||`/listings/${listing.id}/reviews`|| `/listings/${listing.id}`;
res.redirect(`/listings/${listing.id}`);
// res.redirect(redirect);
};


// destroy review == delete review
module.exports.destroyReview= async(req,res)=>{
    let {id,reviewId}= req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
     req.flash("success","Review Deleted");
     res.redirect(`/listings/${id}`);
};