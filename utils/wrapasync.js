function wrapAsync(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>{
            //agar koe error catch huwa to aap simply us error ku global handler ke paas send kardo
            next(err);
        })
    }

}
module.exports = wrapAsync;