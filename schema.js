const joi= require("joi");
const listingSchema = joi.object({
    listing: joi.object({
        title:joi.string().required(),
        description: joi.string().required(),
        country:joi.string().required(),
        location:joi.string().required(),
        price:joi.number().required(),
        image:joi.string().allow("",null)
 
    }).required()
})

module.exports = {listingSchema};

// review schema 
module.exports.reviewSchema = joi.object({
    review:joi.object({
        rating: joi.number().required().min(1).max(5),
        comment:joi.string().required(),
    }).required()
})
//user schema
module.exports.userSchema= joi.object({
        username:joi.string().required(),
        email:joi.string().required(),
        password:joi.string().required()
 
}).required();