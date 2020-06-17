function initMap() {
    var uluru = {
        lat: 50.068143,
        lng: 19.941102
    };
    var map = new google.maps.Map(
        document.querySelector(".map"), {
            zoom: 18,
            center: uluru
        });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}