(function () {
  const TABLET_WIDTH = 768;
  const DESKTOP_WIDTH = 1240;

  window.initMap = function() {
    const viewport = document.documentElement.clientWidth || window.innerWidth;
    const mapCenter = viewport < DESKTOP_WIDTH ? {lat: 59.938882, lng: 30.32323} : {lat: 59.939065, lng: 30.319335};
    const pinCenter = viewport < TABLET_WIDTH ? {lat: 59.93871, lng: 30.32323} : {lat: 59.93871, lng: 30.32299};

    const map = new google.maps.Map(document.getElementById("map"), {
      center: mapCenter,
      zoom: 15,
      disableDefaultUI: true
    });

    const pin = {
      url: viewport < TABLET_WIDTH ? "img/map-pin-mobile.png" : "img/map-pin-tablet.png",
    };

    const marker = new google.maps.Marker({
      position: pinCenter,
      map: map,
      optimized: true,
      icon: pin
    });
  }

  window.addEventListener("resize", initMap);
})();
