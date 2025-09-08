// const sampleListings = [
//   {
//     title: "Sunny Riverside Apartment",
//     description: "A beautiful apartment overlooking the river, ideal for solo travelers and couples seeking peace.",
//     image: {
//       filename:"ListingImage",
//       url:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
//     },
//     price: 1200,
//     location: "Paris",
//     country: "France"
//   },
//   {
//     title: "Modern Downtown Loft",
//     description: "Spacious loft with modern interiors, close to all major city attractions and nightlife.",
//     image: {
//       filename:"ListingImage",
//       url:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
//     },
//     price: 2500,
//     location: "New York",
//     country: "USA"
//   },
//   {
//     title: "Cozy Mountain Retreat",
//     description: "Warm wooden cabin in the hills, perfect for family vacations and quiet weekends.",
//     image: {
//       filename:"ListingImage",
//       url:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww"
//     },
//     price: 1800,
//     location: "Manali",
//     country: "India"
//   },
//   {
//     title: "Lakeside Wooden House",
//     description: "Experience calm mornings by the lake in this charming and rustic home.",
//     image: {
//       file:"ListingImage",
//       url:"https://images.unsplash.com/photo-1596386461350-326ccb383e9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
//     },
//     price: 2100,
//     location: "Queenstown",
//     country: "New Zealand"
//   },
//   {
//     title: "Beachfront Paradise",
//     description: "Wake up to ocean views in this bright and breezy beach house just steps from the shore.",
//     image: {
//       filename:"ListingImage",
//       url:"https://images.unsplash.com/photo-1657349226767-66c983d7df39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
//     },
//     price: 3200,
//     location: "Bali",
//     country: "Indonesia"
//   },
//   {
//     title: "Elegant Urban Condo",
//     description: "Luxury living in a modern condo right in the heart of the city center.",
//     image: {
//       filename:"ListingImage",
//       url:"https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
//     },
//     price: 4000,
//     location: "Dubai",
//     country: "UAE"
//   },
//   {
//     title: "Rustic Countryside Cottage",
//     description: "Old-style cottage with natural surroundings and fresh air — ideal for digital detox.",
//     image: {
//       filename:"ListingImage",
//       url:"https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
//     },
//     price: 900,
//     location: "Yorkshire",
//     country: "UK"
//   },
//   {
//     title: "Bohemian Artist's Studio",
//     description: "Colorful and creative space made for artists, thinkers, and wanderers.",
//     image: {
//       filename:"ListingImage",
//       url:"https://images.unsplash.com/photo-1711111038517-f5d61fe63008?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
//     },
//     price: 1500,
//     location: "Barcelona",
//     country: "Spain"
//   },
//   {
//     title: "Quiet Garden Home",
//     description: "Green backyard, peaceful mornings, and a fully furnished cozy setup await you.",
//     image:{
//       filename:"ListingImage",
//       url: "https://images.unsplash.com/photo-1625244695851-1fc873f942bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
//     },
//     price: 1300,
//     location: "Melbourne",
//     country: "Australia"
//   },
//   {
//     title: "Tech City Apartment",
//     description: "Stay connected in this sleek apartment located in the tech hub of the country.",
//     image:{
//       filename:"ListingImage",
//       url: "https://images.unsplash.com/photo-1648852231208-21ce6bd2768b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
//     },
//     price: 2700,
//     location: "Bangalore",
//     country: "India"
//   },
//   {
//     title: "Historic Stone Villa",
//     description: "Experience heritage in this well-preserved villa full of vintage charm.",
//     image: {
//       filename:"ListingImage",
//       url:"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
//     },
//     price: 2900,
//     location: "Florence",
//     country: "Italy"
//   },
//   {
//     title: "Luxury Penthouse Suite",
//     description: "Top floor penthouse with city skyline views and premium interior design.",
//     image:{
//       filename:"ListingImage",
//       url: "https://plus.unsplash.com/premium_photo-1681822718579-314dd234fb6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
//     },
//     price: 4800,
//     location: "Tokyo",
//     country: "Japan"
//   },
//   {
//     title: "Chic Seaside Condo",
//     description: "A relaxing and stylish condo just a short walk from the sea breeze and waves.",
//     image: {
//       filename:"ListingImage",
//       url:"https://plus.unsplash.com/premium_photo-1681822718579-314dd234fb6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
//     },
//     price: 2200,
//     location: "Miami",
//     country: "USA"
//   },
//   {
//     title: "Modern Studio Flat",
//     description: "Compact yet functional studio in a well-connected area of the city.",
//     image: {
//       filename:"ListingImage",
//       url:"https://images.unsplash.com/photo-1657002865844-c4127d542c41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",

//     },
//     price: 1100,
//     location: "Berlin",
//     country: "Germany"
//   },
//   {
//     title: "Peaceful Jungle Hut",
//     description: "A quiet stay in the heart of nature, surrounded by greenery and wildlife.",
//     image: {
//       filename:"ListingImage",
//       url:"https://images.unsplash.com/photo-1711470623168-885d5b054e57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
//     },
//     price: 950,
//     location: "Chiang Mai",
//     country: "Thailand"
//   },
// ];

// module.exports={data: sampleListings};



// chatgpt updated data.js
const sampleListings = [
  {
    title: "Sunny Riverside Apartment",
    description: "A beautiful apartment overlooking the river, ideal for solo travelers and couples seeking peace.",
    image: {
      filename:"ListingImage",
      url:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
    },
    price: 1200,
    location: "Paris",
    country: "France",
    geometry: { type: "Point", coordinates: [2.3522, 48.8566] } // Paris
  },
  {
    title: "Modern Downtown Loft",
    description: "Spacious loft with modern interiors, close to all major city attractions and nightlife.",
    image: {
      filename:"ListingImage",
      url:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
    },
    price: 2500,
    location: "New York",
    country: "USA",
    geometry: { type: "Point", coordinates: [-74.0060, 40.7128] } // New York
  },
  {
    title: "Cozy Mountain Retreat",
    description: "Warm wooden cabin in the hills, perfect for family vacations and quiet weekends.",
    image: {
      filename:"ListingImage",
      url:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww"
    },
    price: 1800,
    location: "Manali",
    country: "India",
    geometry: { type: "Point", coordinates: [77.1887, 32.2396] } // Manali
  },
  {
    title: "Lakeside Wooden House",
    description: "Experience calm mornings by the lake in this charming and rustic home.",
    image: {
      file:"ListingImage",
      url:"https://images.unsplash.com/photo-1596386461350-326ccb383e9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    price: 2100,
    location: "Queenstown",
    country: "New Zealand",
    geometry: { type: "Point", coordinates: [168.6626, -45.0312] } // Queenstown
  },
  {
    title: "Beachfront Paradise",
    description: "Wake up to ocean views in this bright and breezy beach house just steps from the shore.",
    image: {
      filename:"ListingImage",
      url:"https://images.unsplash.com/photo-1657349226767-66c983d7df39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    price: 3200,
    location: "Bali",
    country: "Indonesia",
    geometry: { type: "Point", coordinates: [115.1889, -8.4095] } // Bali
  },
  // ...baaki objects bhi isi pattern pe geometry ke saath
];

module.exports = { data: sampleListings };
