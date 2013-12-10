function initialize() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 6,
    scrollwheel: false,
    disableDefaultUI: true,
    zoomControl: true
  });
  
  styles = [
    {
      "featureType": "landscape",
      "stylers": [
        { "visibility": "on" },
        { "color": "#ffffff" }
      ]
    },{
      "featureType": "poi",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "transit",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "water",
      "stylers": [
        { "visibility": "simplified" },
        { "color": "#6a7c87"}
      ]
    },{
      "featureType": "road",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "administrative",
      "elementType": "labels",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "administrative.locality",
      "stylers": [
        { "visibility": "on" }
      ]
    }
  ]
  styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  var geocoder = new google.maps.Geocoder();
  
  geocoder.geocode({'address': made_in}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: made_in
      });
      map.setCenter(results[0].geometry.location);
    }
  });
  
}
google.maps.event.addDomListener(window, 'load', initialize);
//end