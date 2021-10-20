export const initMap = function () {
  const uluru = {lat: 50.550, lng: 750.500};
  const map = new google.maps.Map(document.getElementById('contact-map'), {
    zoom: 4,
    center: uluru,
  });

  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
