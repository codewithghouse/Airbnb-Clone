const mongoose= require("mongoose");
const Review = require("./reviews.js");
const Schema= mongoose.Schema;


// shcema define karre yahaan pe ham
const listingSchema=  new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    // image:{
    //     type: String,
    //     default:"https://images.unsplash.com/photo-1753103098469-29b6e6bec545?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
    //     set: function(v){
    //          //yahaan ham image ki value ku defalt pe set isliye kare taake user ke paas agar image na hooo to backend se ek image automatic set hojaye us listing ku 
    //     if(v===""){
    //         return "https://images.unsplash.com/photo-1753103098469-29b6e6bec545?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D";
    //     }
    //     return v;
    //    }
    // },
    image:{
       url: String,
       filename:String
    },
    price:{
        type: Number,
        default:1200
    },
    location:{
        type:String,
       required:true
    },
    country:{
        type: String,
        default:"india"
    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review"
        }
    ],
    // no array for owner coz owener is only the one
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    geometry:{
        type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
    }
})

listingSchema.post("findOneAndDelete",async(listing)=>{
   if(listing.reviews.length){
    let  res = await Review.deleteMany({_id:{$in:listing.reviews}})
    console.log(`the post middlware data ${res}`);
   }
})
const Listing = mongoose.model("Listing",listingSchema);

// export kardere yahaan se and app.js me ham listing.js ku require karlenge 
module.exports = Listing;