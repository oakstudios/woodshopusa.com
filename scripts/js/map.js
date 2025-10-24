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
  
  geocoder.geocode({'address': 'Middletown - DE'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Middletown - DE'
      });
      var infowindowmiddletownde = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Middletown, DE</h1><ul><li><a href="/products/handmade-pawfect-carving">Handmade Pawfect Carving</a></li></ul><p><a href="/products/in/middletown-de" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowmiddletownde.open(map,marker);
      });
      infowindows.push(infowindowmiddletownde);
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
        content: '<h1 class="post-title">Portland, OR</h1><ul><li><a href="/products/wood-wall-shelf">Wood Wall Shelf</a></li><li><a href="/products/planter">Planter</a></li><li><a href="/products/belmont-sunglasses">Belmont Sunglasses</a></li><li><a href="/products/dock-for-iphone">Dock for iPhone</a></li></ul><p><a href="/products/in/portland-or" class="view-all">View all</a></p>'
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
  
  geocoder.geocode({'address': 'Port Washington - WI'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Port Washington - WI'
      });
      var infowindowportwashingtonwi = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Port Washington, WI</h1><ul><li><a href="/products/cedar-hanger-with-lavendar">Cedar Hanger with lavender</a></li></ul><p><a href="/products/in/port-washington-wi" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowportwashingtonwi.open(map,marker);
      });
      infowindows.push(infowindowportwashingtonwi);
    }
  });
  
  geocoder.geocode({'address': 'Brookhaven - PA'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Brookhaven - PA'
      });
      var infowindowbrookhavenpa = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Brookhaven, PA</h1><ul><li><a href="/products/wood-ballpoint-pen">Willow Wood Ballpoint Pen</a></li></ul><p><a href="/products/in/brookhaven-pa" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowbrookhavenpa.open(map,marker);
      });
      infowindows.push(infowindowbrookhavenpa);
    }
  });
  
  geocoder.geocode({'address': 'St Shelbyville - TN'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'St Shelbyville - TN'
      });
      var infowindowstshelbyvilletn = new google.maps.InfoWindow({
        content: '<h1 class="post-title">St Shelbyville, TN</h1><ul><li><a href="/products/heritage-collection-pencil-variety-pack">Heritage Collection - Pencil Variety Pack</a></li></ul><p><a href="/products/in/st-shelbyville-tn" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowstshelbyvilletn.open(map,marker);
      });
      infowindows.push(infowindowstshelbyvilletn);
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
        content: '<h1 class="post-title">New York, NY</h1><ul><li><a href="/products/all-day-yo-yo">All Day Yo-Yo</a></li><li><a href="/products/serving-hands">Serving Hands</a></li><li><a href="/products/linnea-bookshelf">Linnea Bookshelf</a></li><li><a href="/products/american-felling-axe">The Spark Axe</a></li></ul><p><a href="/products/in/new-york-ny" class="view-all">View all</a></p>'
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
  
  geocoder.geocode({'address': 'Eagle Mountain - UT'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Eagle Mountain - UT'
      });
      var infowindoweaglemountainut = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Eagle Mountain, UT</h1><ul><li><a href="/products/koa-sun-ring">Koa ring</a></li></ul><p><a href="/products/in/eagle-mountain-ut" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindoweaglemountainut.open(map,marker);
      });
      infowindows.push(infowindoweaglemountainut);
    }
  });
  
  geocoder.geocode({'address': 'Vacaville - CA'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Vacaville - CA'
      });
      var infowindowvacavilleca = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Vacaville, CA</h1><ul><li><a href="/products/sandblasted-grapewood-plant-pot">Sandblasted Grapewood plant pot</a></li></ul><p><a href="/products/in/vacaville-ca" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowvacavilleca.open(map,marker);
      });
      infowindows.push(infowindowvacavilleca);
    }
  });
  
  geocoder.geocode({'address': 'Fremont - CA'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Fremont - CA'
      });
      var infowindowfremontca = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Fremont, CA</h1><ul><li><a href="/products/wooden-earrings">Wooden Earrings</a></li></ul><p><a href="/products/in/fremont-ca" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowfremontca.open(map,marker);
      });
      infowindows.push(infowindowfremontca);
    }
  });
  
  geocoder.geocode({'address': 'New Orleans - LA'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'New Orleans - LA'
      });
      var infowindowneworleansla = new google.maps.InfoWindow({
        content: '<h1 class="post-title">New Orleans, LA</h1><ul><li><a href="/products/turntable">Custom Turntable</a></li></ul><p><a href="/products/in/new-orleans-la" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowneworleansla.open(map,marker);
      });
      infowindows.push(infowindowneworleansla);
    }
  });
  
  geocoder.geocode({'address': 'Wilson - CT'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Wilson - CT'
      });
      var infowindowwilsonct = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Wilson, CT</h1><ul><li><a href="/products/barbecue-toy-set">Barbecue Toy Set</a></li></ul><p><a href="/products/in/wilson-ct" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowwilsonct.open(map,marker);
      });
      infowindows.push(infowindowwilsonct);
    }
  });
  
  geocoder.geocode({'address': 'Mapleton - UT'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Mapleton - UT'
      });
      var infowindowmapletonut = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Mapleton, UT</h1><ul><li><a href="/products/coasters">Coasters</a></li><li><a href="/products/candle-holders">Candle Holders</a></li></ul><p><a href="/products/in/mapleton-ut" class="view-all">View all</a></p>'
      });
      google.maps.event.addListener(marker, 'click', function() {
        for (var i=0;i<infowindows.length;i++) {
          infowindows[i].close();
        }
        infowindowmapletonut.open(map,marker);
      });
      infowindows.push(infowindowmapletonut);
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
        content: '<h1 class="post-title">Richmond, VA</h1><ul><li><a href="/products/raven-ii-speakers">Raven II Speakers</a></li></ul><p><a href="/products/in/richmond-va" class="view-all">View all</a></p>'
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
  
  geocoder.geocode({'address': 'Grand Rapids - MI'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Grand Rapids - MI'
      });
      var infowindowgrandrapidsmi = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Grand Rapids, MI</h1><ul><li><a href="/products/classic-wooden-blocks">Classic Wooden Blocks</a></li></ul><p><a href="/products/in/grand-rapids-mi" class="view-all">View all</a></p>'
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
  
  geocoder.geocode({'address': 'Brooklyn - NY'}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'Brooklyn - NY'
      });
      var infowindowbrooklynny = new google.maps.InfoWindow({
        content: '<h1 class="post-title">Brooklyn, NY</h1><ul><li><a href="/products/looper-voice-recorder">Looper Voice Recorder</a></li></ul><p><a href="/products/in/brooklyn-ny" class="view-all">View all</a></p>'
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