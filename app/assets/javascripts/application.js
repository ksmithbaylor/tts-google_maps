// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function () {
    console.log('loaded the page');

    function initialize() {
      var mapOptions = {
        center: { lat: 34.0753519, lng: -84.29423759999997},
        zoom: 12
      };

      var map = new google.maps.Map(document.getElementById('map-canvas'),
                                    mapOptions);
    }

    google.maps.event.addDomListener(window, 'load', initialize);
});
