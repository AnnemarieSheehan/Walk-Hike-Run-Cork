// Sticky navbar
// =========================
$(document).ready(function () {
    // Custom function which toggles between sticky class (is-sticky)
    var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        }
        else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function () {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });
});
//google maps 

// set location variables 
var map;
        var InforObj = [];
        var centerCords = {
            lat: 51.903614,
            lng: -8.468399
        };
        var markersOnMap = [{
                placeName: "Glengarrif Nature Reserve",
                LatLng: [{
                    lat: 51.7500,
                    lng: -9.5522
                }]
            },
            {
                placeName: "Charles Fort, Kinsale",
                LatLng: [{
                    lat: 51.71308,
                    lng: -8.522501
                }]
            },
            {
                placeName: "Ballycotton Cliff Walk",
                LatLng: [{
                    lat: 51.8299,
                    lng: -8.0098
                }]
            },
            {
                placeName: "Gougane Barra", 
                LatLng: [{
                    lat: 51.8394,
                    lng: -9.3148
                }]
            },
            {
                placeName: "Cork City", 
                LatLng: [{
                    lat: 51.903614,
                    lng: -8.468399
                }]
            }
        ];
 
        window.onload = function () {
            initMap();
        };
 
        function addMarkerInfo() {
            for (var i = 0; i < markersOnMap.length; i++) {
                var contentString = '<div id="content"><h1>' + markersOnMap[i].placeName +
                    '</h1><p>See our Walks page for further details</p></div>';
 
                const marker = new google.maps.Marker({
                    position: markersOnMap[i].LatLng[0],
                    map: map
                });
 
                const infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    maxWidth: 200
                });
 
                marker.addListener('click', function () {
                    closeOtherInfo();
                    infowindow.open(marker.get('map'), marker);
                    InforObj[0] = infowindow;
                });
                
            }
        }
 
        function closeOtherInfo() {
            if (InforObj.length > 0) {
                InforObj[0].set("marker", null);
                InforObj[0].close();
                InforObj.length = 0;
            }
        }
 
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 8,
                center: centerCords
            });
            addMarkerInfo();
        }
 