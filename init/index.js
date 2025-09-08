const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// dotenv load kar
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: __dirname + "/../.env" });
}

const dburl = process.env.ATLASDB_URL;

let connect_db = async () => {
    try {
        await mongoose.connect(dburl);
        console.log("the mongodb is connected");
    } catch (e) {
        console.log(e.message, "some error in db");
    }
};
connect_db();

// let initDB = async () => {
//    try {
//      await Listing.deleteMany({});
//      initData.data = initData.data.map((obj) => ({ ...obj, owner: "68bd288a41669e8c5754c549" }));
//      await Listing.insertMany(initData.data);
//      console.log("the data was inserted");
//    } catch (e) {
//      console.log(e.message);
//    }
// };
// initDB();
let initDB= async()=>{
   try {
     await Listing.deleteMany({});
    // initdata hamara varaible hai jiske ander data.js ka data name ka obejct store hai 
    //owner ku associate karre through map function
   initData.data= initData.data.map((obj)=>({...obj,owner:"68be17eba1eeb8933a9fb56a"}));
    await Listing.insertMany(initData.data);
    console.log("the data was inserted");
   } catch (e) {
    console.log(e.message)
    
   }
}
initDB();









// // loading for the purpose of inserrting the data 
// if (process.env.NODE_ENV !== "production") {
//     require("dotenv").config();
// }
// const mongoose= require("mongoose");
// const initData= require("./data.js");
// // table.collection ku require karre data insert karne ke liye
// const Listing= require("../models/listing.js");



// // connection fomr karre
// // let mongo_url= 'mongodb://127.0.0.1:27017/airbnb';
// const dburl= process.env.ATLASDB_URL;
// let connect_db= async ()=>{
//     try {
//        await mongoose.connect(dburl);
    
//     console.log("the mongodb is connected");

//     } catch (e) {
//        console.log(e.message,"some error in db");
       
//     }
// }
// connect_db();

// // data insert karne ke liye initdb function create karenge taake jab bhi new data insert hoo to pura deelte hoke uske sath new data bhi insert hooo
// let initDB= async()=>{
//    try {
//      await Listing.deleteMany({});
//     // initdata hamara varaible hai jiske ander data.js ka data name ka obejct store hai 
//     //owner ku associate karre through map function
//    initData.data= initData.data.map((obj)=>({...obj,owner:"68be17eba1eeb8933a9fb56a"}));
//     await Listing.insertMany(initData.data);
//     console.log("the data was inserted");
//    } catch (e) {
//     console.log(e.message)
    
//    }
// }
// initDB();