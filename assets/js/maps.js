var map;
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 55.611186, lng: 12.987250 },
                zoom: 10
            });

            var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var locations = [
                { lat: 55.611186, lng: 12.987250 },
                { lat: 55.589359, lng: 13.003574 },
                { lat: 55.563759, lng: 12.975893 }
            ];

            var markers = locations.map(function (location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
        }