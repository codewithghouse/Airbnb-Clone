const Listing= require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken= process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

// index route function --> /listings
module.exports.index =(async(req,res)=>{
    try {
     
        let allListings= await Listing.find({});
    console.log("data fetch successfully");
    res.render("listings/home.ejs",{allListings});
    // res.send(allListings);
    } catch (e) {
        console.log(e.message);
        
    }
});

// new route
module.exports.renderNewform= (req,res)=>{
   console.log(req.user);
    res.render("listings/new.ejs");
};
//create listing route
module.exports.createListing= async(req,res,next)=>{
    // printing the coordinates
   let response = await geocodingClient.forwardGeocode({
    // yaani jo location ham listing ku crete karte time enter karre uske coordinates hona hai hame
  query: req.body.listing.location,
  limit:1
})
  .send()
//   console.log(response.body.features[0].geometry)

    let url= req.file.path;
    let filename = req.file.filename
     let newlisting= new Listing(req.body.listing);

     //req.user me passport currnet user jo lgin hai uski info store karta hai
     newlisting.owner= req.user._id;
    //  url and filename ku db ke ander listing ke sath save kararain 
     newlisting.image={url,filename};
    //  ye jo coordinates hai wo map box se aare and ham isku db me update karre individual listing ke sath
     newlisting.geometry= response.body.features[0].geometry
   let savedlisting= await newlisting.save();
   console.log(savedlisting);
    //  if(result.error){
    //      return next( new ExpressError(400,result.error));
    // }
    // console.log(result);
    req.flash("success","New Listing Created");
    res.redirect("/listings");
   
    // res.send("form data fecth successfully");
};

// show route .. show listings--> show.ejs form
module.exports.showListing = (async(req,res)=>{
    let{id}= req.params;
    let listing= await Listing.findById(id).populate({path:"reviews",populate:{ path:"author"}}).populate("owner");
    console.log(" the individual info is fetch");
    if(!listing){
        req.flash("error","Listing Requested For Does not exists");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});
    // console.log(id);
    // res.send("the id is in the console");
});

// edit route.-->edit.ejs rendeering
module.exports.renderEditform= async(req,res)=>{
    let{id}= req.params;
    let listing = await Listing.findById(id);
    console.log(listing);
      if(!listing){
        req.flash("error","Listing Requested For Does not exists");
        res.redirect("/listings");
    }
    let originalimageurl= listing.image.url;
    // imageke qulityku decress karee taake load kam padhe preview ke time pe
  originalimageurl= originalimageurl.replace("/upload","/upload/w_250");
    res.render("listings/edit.ejs",{listing ,originalimageurl});
    // res.send(listing);

};

// update route
module.exports.updateListing= async(req,res)=>{
     let response = await geocodingClient.forwardGeocode({
    // yaani jo location ham listing ku crete karte time enter karre uske coordinates hona hai hame
  query: req.body.listing.location,
  limit:1
})
  .send()
  
    let { id}= req.params;
    let listing= req.body.listing;
    console.log(listing);
    // locatio update kare to map chnage hona wo logic hai yahan pe
      if (response.body.features.length > 0) {
  listing.geometry = response.body.features[0].geometry;
}
    // yahaan pe ham listing object ku destructing krre kyunki hame fields chahiye isliye ke ham listing[title] aisa liye bolke 

    let updatedlisting= await Listing.findByIdAndUpdate(id,{...listing},{new:true,runValidators:true});
    console.log(updatedlisting);
    // updating the upload listing logic is here 
    if(typeof req.file !=="undefined"){
        let url= req.file.path;
        let filename= req.file.filename;
        updatedlisting.image={url,filename};
        await updatedlisting.save();
    }
    //using template literals for rediercting to the show route/path
     req.flash("success","Listing Updated");
    res.redirect(`/listings/${id}`);
   

};
// delete route === destroy route ..for industry purpose
module.exports.destroyListing = async(req,res)=>{
    let {id}=req.params;
    let deletelisting= await Listing.findByIdAndDelete(id);
    console.log(deletelisting);
     req.flash("success","Listing Deleted");
    res.redirect("/listings");
    // console.log(" the user is deletd");
    // res.send(" the user is deletd");
};