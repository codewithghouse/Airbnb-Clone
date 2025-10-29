const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// extra peace of code for accessing the credentials of .env
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
});
// defining the storage where we want to store our listing image
//destinatio derain ke cloudinary account ke uppr ek folder hai airbnb bolke usme images store karna hai
 
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'airbnb',
    allowedformat: ['png','jpg','jpeg'], // supports promises as well
  },
});

// exporting 2 things
module.exports={
    cloudinary,
    storage
}
