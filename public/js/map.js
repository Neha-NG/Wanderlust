
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom:  9 // starting zoom
});


// console.log(coordinates);


 // Create a default Marker and add it to the map.
 const marker = new mapboxgl.Marker({ color: 'red', rotation: 45 })
 .setLngLat(listing.geometry.coordinates)        //Listing.geometry.coordinates
 .setPopup(new mapboxgl.Popup({offset: 25}).setHTML(
    `<h4>${listing.title}</h4><p>Exact location will be provided after booking.</p>`
))
 .addTo(map);


// {/* <i class="fa-solid fa-house"></i>

// map.on('load', () => {
//     // Load an image from an external URL.
//     map.loadImage(
//         'https://docs.mapbox.com/mapbox-gl-js/assets/cat.png',
//         (error, image) => {
//             if (error) throw error;

//             // Add the image to the map style.
//             map.addImage('home', image);

//             // Add a data source containing one point feature.
//             map.addSource('point', {
//                 'type': 'geojson',
//                 'data': {
//                     'type': 'FeatureCollection',
//                     'features': [
//                         {
//                             'type': 'Feature',
//                             'geometry': {
//                                 'type': 'Point',
//                                 'coordinates': [-77.4144, 25.0759]
//                             }
//                         }
//                     ]
//                 }
//             })
//         })
//     });

//  */}
