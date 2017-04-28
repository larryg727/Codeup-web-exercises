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
    var address;
    var cnt = "3";
    var useClass = ".threeDayBox";
    var infoContent = "Drag me to change locations";
    var infowindow = new google.maps.InfoWindow({
        content: infoContent
    });
    var day;
    var today;
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurseday", "Friday", "Saturday"];

    function loadWeather() {
        $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
            APPID: "a824ef2e2591bd239228beab33789010",
            lat: lat,
            lon: lng,
            units: "imperial",
            cnt: cnt
        }).done(function (data) {
            data.list.forEach(function (el, i) {
                var appendStr = '';
                var idVar = "#day" + i;   // to cycle between  weather divs
                var maxTemp = Math.round(data.list[i].temp.max);
                var minTemp = Math.round(data.list[i].temp.min);
                var iconUrl = "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png";
                appendStr += ("<h3>" + maxTemp + "&deg/" + minTemp + "&deg</h3>");
                appendStr += ("<img src='" + iconUrl + "' alt='Icon'>");
                appendStr += ("<p><strong>" + data.list[i].weather[0].main + ":</strong> " + data.list[i].weather[0].description + "</p>");
                appendStr += ("<p><strong>Humidity: </strong>" + data.list[i].humidity + "</p>");
                appendStr += ("<p><strong>Wind: </strong>" + data.list[i].speed + "</p>");
                appendStr += ("<p><strong>Pressure: </strong>" + data.list[i].pressure + "</p>");

                $(useClass+idVar).html(appendStr);  //inserting new weather

                infoContent = "<h3>Todays high: " + Math.round(data.list[0].temp.max) + "&deg</h3><h3>Today's low: " + Math.round(data.list[0].temp.min) + "&deg</h3>";
                infowindow.setContent(infoContent);
            });
            $("#currentCity").html(data.city.name);  //update current city


        });
    }


       //day selector buttons
    $("#today").click(function(){
        useClass = ".todayBox";
        cnt = "1";
        $(".todayBox").show();
        $(".threeDayBox, .fiveDayBox, .tenDayBox, #threeDayList, #fiveDayList").hide();
        loadTodayWeather();
    });

    $("#threeDay").click(function(){
        useClass = ".threeDayBox";
        cnt = "3";
        $(".threeDayBox, #threeDayList").show();
        $(".todayBox, .fiveDayBox, .tenDayBox, #fiveDayList").hide();
        dayFinder();
        loadWeather();
    });

    $("#fiveDay").click(function(){
        useClass = ".fiveDayBox";
        cnt = "5";
        $(".fiveDayBox, #fiveDayList").css("display", "inline-block");
        $(".todayBox, .threeDayBox, .tenDayBox, #threeDayList").hide();
        dayFinderfive();
        loadWeather();
    });

    $("#tenDay").click(function(){
        useClass = ".tenDayBox";
        cnt = "10";
        $(".tenDayBox").css("display", "inline-block");
        $(".todayBox, .fiveDayBox, .threeDayBox, #threeDayList, #fiveDayList").hide();
        loadWeather();
    });
        // update map button
    $("#locSubmit").click(function(){
       lat = $("#lat").val();   //updating position to value in input
       lng = $("#lng").val();
       runToday();            // update map and weather
      initializeMap();
    });



    function focusMap(){
        map.setCenter(marker.position);//resets center of map.. NOO reload!
        // map.setZoom(9);      // zoom in on city
        infowindow.open(map, marker);
    }

    function focusMarker(){   //sets marker if location moved by other means
        marker.setPosition({
            lat: lat,
            lng: lng
        })
    }

    function updateInputs(){
        $("#lat").val(lat.toFixed(6));    // update input values to current location
        $("#lng").val(lng.toFixed(6));
    }

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
        //create map
        map = new google.maps.Map(document.getElementById("map"), mapOptions);

        // create marker
        marker = new google.maps.Marker({
            position: {
                lat: parseFloat(lat),
                lng: parseFloat(lng)
            },
            map: map,
            draggable: true
        });

        infowindow.open(map, marker);
        // drag event
        google.maps.event.addListener(marker, 'dragend', function() {
            lat = marker.position.lat();    // getting current lat of marker
            lng = marker.position.lng();     // getting current lng of marker
            runToday();                     //updating weather and map
            updateInputs();
            focusMap();
        });

        //address search button
        $("#searchBtn").click(function(){
            address = $("#search").val();  //get address from input
            var geocoder = new google.maps.Geocoder();
           geocoder.geocode({address: address}, function (results, status){
                if (status === google.maps.GeocoderStatus.OK) {
                    lat = results[0].geometry.location.lat();  // update global lat and lng variables to results
                    lng = results[0].geometry.location.lng();
                    runToday();
                    updateInputs();
                    focusMarker();     //update map and marker to new location
                    focusMap();

                } else {
                    alert("Please enter a valid location");
                }
            });
        });

    }

    //separate function for today tab. too many differences
    function loadTodayWeather() {


        $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
            APPID: "a824ef2e2591bd239228beab33789010",
            lat: lat,
            lon: lng,
            units: "imperial",
            cnt: cnt
        }).done(function (data) {
            console.log(data);
            data.list.forEach(function (el, i) {
                var appendStr = '';
                var idVar = "#day" + i;   // to cycle between three weather divs
                var maxTemp = Math.round(data.list[i].temp.max);
                var minTemp = Math.round(data.list[i].temp.min);
                var iconUrl = "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png";
                appendStr += ("<img src='" + iconUrl + "' alt='Icon'>");
                appendStr += ("<h3>High: " + maxTemp + "&deg</h3>");
                appendStr += ("<h3>Low: " + minTemp + "&deg</h3>");
                appendStr += ("<p><strong>" + data.list[i].weather[0].main + ":</strong> " + data.list[i].weather[0].description + "</p>");
                appendStr += ("<p><strong>Humidity: </strong>" + data.list[i].humidity + "</p>");
                appendStr += ("<p><strong>Wind: </strong>" + data.list[i].speed + "</p>");
                appendStr += ("<p><strong>Pressure: </strong>" + data.list[i].pressure + "</p>");

                $(".todayBox").html(appendStr);  //inserting new weather
            });
            $("#currentCity").html(data.city.name);  //update current city
        });
        $.get("http://api.openweathermap.org/data/2.5/weather", {
            APPID: "a824ef2e2591bd239228beab33789010",
            lat: lat,
            lon: lng,
            units: "imperial"
        }).done(function (data) {
            console.log(data);
            var newStr = '';
            var currentTemp = Math.round(data.main.temp);
            newStr += ("<h3>Current Temp:  " + currentTemp + "&deg</h3>");
            $(".todayBox").append(function(n, h){
                $(".todayBox").html("");
                return newStr + h;
            });

        });
    }

    function runToday(){
        if($(".todayBox").css("display") !== "none"){
            loadTodayWeather();
        }else{
            loadWeather();
        }
    };

    function dayFinder() {
        today = new Date().getDay();
        for (day = 1; day <= 4; day++) {
            if (today + day < 7) {
                $(".daysId3").children().first().next().text(daysOfWeek[today + 1]);
                $(".daysId").children().first().next().next().text(daysOfWeek[today + 2]);
            } else {
                $(".daysId3").children().first().next().text(daysOfWeek[today + 1 - 7]);
                $(".daysId3").children().first().next().next().text(daysOfWeek[today + 2 - 7]);
            }
        }
    }
    function dayFinderfive() {
        today = new Date().getDay();
        for (day = 1; day <= 4; day++) {
            if (today + day < 7) {
                $(".daysId").children().first().next().text(daysOfWeek[today + 1]);
                $(".daysId").children().first().next().next().text(daysOfWeek[today + 2]);
                $(".daysId").children().first().next().next().next().text(daysOfWeek[today + 3]);
                $(".daysId").children().first().next().next().next().next().text(daysOfWeek[today + 4]);
            } else {
                $(".daysId").children().first().next().text(daysOfWeek[today + 1 - 7]);
                $(".daysId").children().first().next().next().text(daysOfWeek[today + 2 - 7]);
                $(".daysId").children().first().next().next().next().text(daysOfWeek[today + 3 - 7]);
                $(".daysId").children().first().next().next().next().next().text(daysOfWeek[today + 4 - 7]);
            }
        }
    }
    dayFinder();

    initializeMap();  // initial map load
    loadWeather(); // initial weather load


});