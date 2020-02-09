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
                description: "One of Corks most famous parks, Glengarrif can be visited en route to the Bearra Peninsula",
                LatLng: [{
                    lat: 51.7500,
                    lng: -9.5522
                }]
            },
            {
                placeName: "Charles Fort, Kinsale",
                description: "The path that runs from the fort out along the coast line is perfect for hiking or running. The reward of lunch in any one of Kinsale's excellent eaterey's then awaits!",
                LatLng: [{
                    lat: 51.71308,
                    lng: -8.522501
                }]
            },
            {
                placeName: "Ballycotton Cliff Walk",
                description: "This cliff walk is a breath of fresh air! With stunning views that must be seen to be believed",
                LatLng: [{
                    lat: 51.8299,
                    lng: -8.0098
                }]
            },
            {
                placeName: "Gougane Barra", 
                description: "This place of stunning natural beauty is a must see destination in Cork",
                LatLng: [{
                    lat: 51.8394,
                    lng: -9.3148
                }]
            },
            {
                placeName: "Cork City", 
                description: "The city centre has some gorgeous off road and historical walks, take a break from work or meetings!",
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
                
                    '</h1><p>'+ markersOnMap[i].description +' <a href=".../walks.html">See our Walks page for further details</a>r</p></div>';
 
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
 