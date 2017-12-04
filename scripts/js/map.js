function initialize() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 4,
    scrollwheel: false,
    disableDefaultUI: true,
    zoomControl: true,
    panControl: true,
    center: new google.maps.LatLng(38,-95.8)
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
  
  var infowindows = [];
  var geocoder = new google.maps.Geocoder();
  
  geocoder.geocode({'address': 'Waukesha - WI'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Waukesha - WI'
      });
      var infowindowwaukeshawi = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Waukesha, WI</h1><ul><li><a href="/products/merry-and-bright-banner">Merry and Bright Banner</a></li></ul><p><a href="/products/in/waukesha-wi" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowwaukeshawi.open(map,marker);
      });
      infowindows.push(infowindowwaukeshawi);
    }
  });
  
  geocoder.geocode({'address': 'Sonoma - CA'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Sonoma - CA'
      });
      var infowindowsonomaca = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Sonoma, CA</h1><ul><li><a href="/products/whisk">Whisk</a></li></ul><p><a href="/products/in/sonoma-ca" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowsonomaca.open(map,marker);
      });
      infowindows.push(infowindowsonomaca);
    }
  });
  
  geocoder.geocode({'address': 'Waco - TX'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Waco - TX'
      });
      var infowindowwacotx = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Waco, TX</h1><ul><li><a href="/products/nesting-houses">Nesting Houses</a></li><li><a href="/products/mug">Mug</a></li></ul><p><a href="/products/in/waco-tx" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowwacotx.open(map,marker);
      });
      infowindows.push(infowindowwacotx);
    }
  });
  
  geocoder.geocode({'address': 'Atlanta - GA'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Atlanta - GA'
      });
      var infowindowatlantaga = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Atlanta, GA</h1><ul><li><a href="/products/deer-teether">Deer Teether</a></li></ul><p><a href="/products/in/atlanta-ga" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowatlantaga.open(map,marker);
      });
      infowindows.push(infowindowatlantaga);
    }
  });
  
  geocoder.geocode({'address': 'Beebe - AK'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Beebe - AK'
      });
      var infowindowbeebeak = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Beebe, AK</h1><ul><li><a href="/products/bookends">Bookends</a></li></ul><p><a href="/products/in/beebe-ak" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowbeebeak.open(map,marker);
      });
      infowindows.push(infowindowbeebeak);
    }
  });
  
  geocoder.geocode({'address': 'Chicopee - MA'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Chicopee - MA'
      });
      var infowindowchicopeema = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Chicopee, MA</h1><ul><li><a href="/products/classic-coffeemaker">Classic Coffeemaker</a></li></ul><p><a href="/products/in/chicopee-ma" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowchicopeema.open(map,marker);
      });
      infowindows.push(infowindowchicopeema);
    }
  });
  
  geocoder.geocode({'address': 'Chicago - IL'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Chicago - IL'
      });
      var infowindowchicagoil = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Chicago, IL</h1><ul><li><a href="/products/cherry-graph">Cherry Graph Memo Book</a></li></ul><p><a href="/products/in/chicago-il" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowchicagoil.open(map,marker);
      });
      infowindows.push(infowindowchicagoil);
    }
  });
  
  geocoder.geocode({'address': 'Portland - OR'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Portland - OR'
      });
      var infowindowportlandor = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Portland, OR</h1><ul><li><a href="/products/round-watch">Round Watch</a></li><li><a href="/products/planter">Planter</a></li><li><a href="/products/lamp">Lamp</a></li><li><a href="/products/campfire-cologne">Campfire Cologne</a></li><li><a href="/products/belmont-sunglasses">Belmont Sunglasses</a></li></ul><p><a href="/products/in/portland-or" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowportlandor.open(map,marker);
      });
      infowindows.push(infowindowportlandor);
    }
  });
  
  geocoder.geocode({'address': 'Indianapolis - IN'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Indianapolis - IN'
      });
      var infowindowindianapolisin = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Indianapolis, IN</h1><ul><li><a href="/products/blocks-marbles">Blocks & Marbles</a></li></ul><p><a href="/products/in/indianapolis-in" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowindianapolisin.open(map,marker);
      });
      infowindows.push(infowindowindianapolisin);
    }
  });
  
  geocoder.geocode({'address': 'Minneapolis - MN'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Minneapolis - MN'
      });
      var infowindowminneapolismn = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Minneapolis, MN</h1><ul><li><a href="/products/tie-bar">Tie Bar</a></li></ul><p><a href="/products/in/minneapolis-mn" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowminneapolismn.open(map,marker);
      });
      infowindows.push(infowindowminneapolismn);
    }
  });
  
  geocoder.geocode({'address': 'Richmond - VA'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Richmond - VA'
      });
      var infowindowrichmondva = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Richmond, VA</h1><ul><li><a href="/products/the-cube-speakers">The Cube Speakers</a></li></ul><p><a href="/products/in/richmond-va" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowrichmondva.open(map,marker);
      });
      infowindows.push(infowindowrichmondva);
    }
  });
  
  geocoder.geocode({'address': 'Houston - TX'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Houston - TX'
      });
      var infowindowhoustontx = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Houston, TX</h1><ul><li><a href="/products/mini-cruiser-no-6">Mini-Cruiser No. 6</a></li></ul><p><a href="/products/in/houston-tx" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowhoustontx.open(map,marker);
      });
      infowindows.push(infowindowhoustontx);
    }
  });
  
  geocoder.geocode({'address': 'San Diego - CA'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'San Diego - CA'
      });
      var infowindowsandiegoca = new google.maps.InfoWindow({
        content: '<h1 class="post-title">San Diego, CA</h1><ul><li><a href="/products/the-butler">The Butler</a></li></ul><p><a href="/products/in/san-diego-ca" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowsandiegoca.open(map,marker);
      });
      infowindows.push(infowindowsandiegoca);
    }
  });
  
  geocoder.geocode({'address': 'New York - NY'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'New York - NY'
      });
      var infowindownewyorkny = new google.maps.InfoWindow({
        content: '<h1 class="post-title">New York, NY</h1><ul><li><a href="/products/american-felling-axe">American Felling Axe</a></li></ul><p><a href="/products/in/new-york-ny" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindownewyorkny.open(map,marker);
      });
      infowindows.push(infowindownewyorkny);
    }
  });
  
  geocoder.geocode({'address': 'Grand Rapids - MI'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Grand Rapids - MI'
      });
      var infowindowgrandrapidsmi = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Grand Rapids, MI</h1><ul><li><a href="/products/christmas-blocks">Christmas Blocks</a></li><li><a href="/products/classic-wooden-blocks">Classic Wooden Blocks</a></li></ul><p><a href="/products/in/grand-rapids-mi" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowgrandrapidsmi.open(map,marker);
      });
      infowindows.push(infowindowgrandrapidsmi);
    }
  });
  
  geocoder.geocode({'address': 'Boston - MA'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Boston - MA'
      });
      var infowindowbostonma = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Boston, MA</h1><ul><li><a href="/products/moonbeam-turntable">Moonbeam Turntable</a></li></ul><p><a href="/products/in/boston-ma" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowbostonma.open(map,marker);
      });
      infowindows.push(infowindowbostonma);
    }
  });
  
  geocoder.geocode({'address': 'Brooklyn - NY'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Brooklyn - NY'
      });
      var infowindowbrooklynny = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Brooklyn, NY</h1><ul><li><a href="/products/city-ornament">City Ornament</a></li><li><a href="/products/looper-voice-recorder">Looper Voice Recorder</a></li></ul><p><a href="/products/in/brooklyn-ny" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowbrooklynny.open(map,marker);
      });
      infowindows.push(infowindowbrooklynny);
    }
  });
  
  geocoder.geocode({'address': 'Louisville - KY'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Louisville - KY'
      });
      var infowindowlouisvilleky = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Louisville, KY</h1><ul><li><a href="/products/natural-wood-baseball-bat">Natural Wood Baseball Bat</a></li></ul><p><a href="/products/in/louisville-ky" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowlouisvilleky.open(map,marker);
      });
      infowindows.push(infowindowlouisvilleky);
    }
  });
  
  geocoder.geocode({'address': 'Latrobe - PA'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Latrobe - PA'
      });
      var infowindowlatrobepa = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Latrobe, PA</h1><ul><li><a href="/products/wp-muddler">Muddler</a></li></ul><p><a href="/products/in/latrobe-pa" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowlatrobepa.open(map,marker);
      });
      infowindows.push(infowindowlatrobepa);
    }
  });
  
  geocoder.geocode({'address': 'Webster - NH'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Webster - NH'
      });
      var infowindowwebsternh = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Webster, NH</h1><ul><li><a href="/products/chop-salad-bowl">Chop Salad Bowl</a></li></ul><p><a href="/products/in/webster-nh" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowwebsternh.open(map,marker);
      });
      infowindows.push(infowindowwebsternh);
    }
  });
  
  geocoder.geocode({'address': 'Philadelphia - PA'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Philadelphia - PA'
      });
      var infowindowphiladelphiapa = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Philadelphia, PA</h1><ul><li><a href="/products/roped-anchors">Roped Anchors</a></li><li><a href="/products/camp-arrows">Camp Arrows</a></li></ul><p><a href="/products/in/philadelphia-pa" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowphiladelphiapa.open(map,marker);
      });
      infowindows.push(infowindowphiladelphiapa);
    }
  });
  
  geocoder.geocode({'address': 'Middlebury - VT'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Middlebury - VT'
      });
      var infowindowmiddleburyvt = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Middlebury, VT</h1><ul><li><a href="/products/classic-yo-yo">Classic Yo-Yo</a></li></ul><p><a href="/products/in/middlebury-vt" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowmiddleburyvt.open(map,marker);
      });
      infowindows.push(infowindowmiddleburyvt);
    }
  });
  
  
}
google.maps.event.addDomListener(window, 'load', initialize);
//end