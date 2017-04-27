/**
 * Created by larryg on 4/27/17.
 */
"use strict";
$(document).ready(function(){

    // retrieving initial default values of san antonio
    var lat = $("#lat").val();
    var lng = $("#lng").val();
    var map;
    var marker;

    function loadWeather() {
        $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
            APPID: "a824ef2e2591bd239228beab33789010",
            lat: lat,
            lon: lng,
            units: "imperial",
            cnt: "3"
        }).done(function (data) {
            console.log(data.city.name);
            data.list.forEach(function (el, i) {
                var appendStr = '';
                var idVar = "#day" + i;   // to cycle between three weather divs
                var maxTemp = Math.round(data.list[i].temp.max);
                var minTemp = Math.round(data.list[i].temp.min);
                var iconUrl = "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png";
                appendStr += ("<h3>" + maxTemp + "&deg/" + minTemp + "&deg</h3>");
                appendStr += ("<img src='" + iconUrl + "' alt='Icon'>");
                appendStr += ("<p><strong>" + data.list[i].weather[0].main + ":</strong> " + data.list[i].weather[0].description + "</p>");
                appendStr += ("<p><strong>Humidity: </strong>" + data.list[i].humidity + "</p>");
                appendStr += ("<p><strong>Wind: </strong>" + data.list[i].speed + "</p>");
                appendStr += ("<p><strong>Pressure: </strong>" + data.list[i].pressure + "</p>");

                $(idVar).html(appendStr);  //inserting new weather
            });
            $("#currentCity").html(data.city.name);  //update current city
        });
    }
        // update map button
    $("#locSubmit").click(function(){
        // clearWeather();
       lat = $("#lat").val();
       lng = $("#lng").val();
       loadWeather(lat, lng);
       initializeMap(lat, lng);
    });

       // map and marker function
    function initializeMap() {
        var mapOptions = {
            center: {
                lat: parseFloat(lat),
                lng: parseFloat(lng)
            },
            zoom: 5,
            disableDefaultUI: true,
            zoomControl: true
        };

        map = new google.maps.Map(document.getElementById("map"), mapOptions);
        marker = new google.maps.Marker({
            position: {
                lat: parseFloat(lat),
                lng: parseFloat(lng)
            },
            map: map,
            draggable: true
        });


        // drag event
        google.maps.event.addListener(marker, 'dragend', function() {
            lat = marker.position.lat();    // getting current lat of marker
            lng = marker.position.lng();     // getting current lng of marker
            $("#lat").val(lat.toFixed(6));    // updating inputs
            $("#lng").val(lng.toFixed(6));
            loadWeather();                      //updating weather and map
            map.setCenter(marker.position);//resets center of map.. NOO reload!
            map.setZoom(9);      // zoom in on city
        });


    }

    initializeMap();  // initial map load
    loadWeather(); // initial weather load


});