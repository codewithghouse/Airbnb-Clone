
const mongoose= require("mongoose");
const { schema } = require("./listing");
const Schema= mongoose.Schema;

const reviewSchema= new Schema({
    comment: String,
    rating:{
        type : Number,
        min:1,
        ma: 5
    },
    createdAt:{
        type: Date,
        default:Date.now,
    },
    author:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
})
//exporting the module

let Review = new mongoose.model("Review",reviewSchema);
module.exports = Review;