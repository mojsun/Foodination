var script = document.createElement("script");
script.src =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyB2Pz9RwTUZCXabCqBHpbeMBLM_6OCGjbo&callback=initMap";
script.async = true;
function initMap() {
  uluru = { lat: -25.344, lng: 131.036 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  let marker = new google.maps.Marker({ position: uluru, map: map });
}
document.head.appendChild(script);
