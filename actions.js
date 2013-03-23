//Geolocalizacion
function inicio(){
var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
  var mapOptions = {
    zoom: 9,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title:"Aqui Ando de tour :)!"
  });
  
}
