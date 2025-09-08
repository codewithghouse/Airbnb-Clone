
    mapboxgl.accessToken = mapToken;


    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });
  const marker = new mapboxgl.Marker({color:'red'})
        .setLngLat(listing.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({offset:25}).setHTML(`<h4>${listing.location}</h4>
               <h6>&#8377;${listing.price.toLocaleString("en-IN")} / night</h6>
               <p>Exact location provided after booking</p>`))
        .addTo(map);


// mapboxgl.accessToken = mapToken;

// const map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v12', // style add karna mat bhoolna
//     center: listing.geometry.coordinates,
//     zoom: 9
// });

// // Custom icon banane ka tarika
// const el = document.createElement('div');
// el.className = 'custom-marker';
// el.style.backgroundImage = 'url(/images/airbnbicon.png)'; // yaha apna icon URL daal
// el.style.width = '40px';
// el.style.height = '40px';
// el.style.backgroundSize = 'cover';
// el.style.borderRadius = '50%'; // agar gol chahiye

// // Marker with custom icon
// new mapboxgl.Marker(el)
//     .setLngLat(listing.geometry.coordinates)
//     .setPopup(
//         new mapboxgl.Popup({ offset: 25 })
//             .setHTML(`<h4>${listing.location}</h4><p>Exact location provided after booking</p>`)
//     )
//     .addTo(map);
