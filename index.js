

mapboxgl.accessToken = 'pk.eyJ1IjoiZXh0cmFrdW4iLCJhIjoiY2swdnZqbG03MTMyNjNibHd6ZGZtZ2h4ZyJ9.3lNlfchk5P2BV4Zcr-bAsg'

var map = new mapboxgl.Map({
  container: 'map', // #1 HTML container id
  style: 'mapbox://styles/mapbox/streets-v9', // style URL
  center: [-21.9270884, 64.1436456], // #2 starting position as [lng, lat]
  zoom: 9
});