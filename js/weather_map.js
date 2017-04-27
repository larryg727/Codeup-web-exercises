/**
 * Created by larryg on 4/27/17.
 */
"use strict";
(function () {

    $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
        APPID: "a824ef2e2591bd239228beab33789010",
        q:     "San Antonio, TX",
        units: "imperial",
        cnt: "3"
    }).done(function(data) {
        console.log(data.list);
        data.list.forEach(function(el, i){
            var appendStr = '';
            var idVar = "#day" + i;
            var maxTemp = Math.round(data.list[i].temp.max);
            var minTemp = Math.round(data.list[i].temp.min);
            var iconUrl = "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png";
            appendStr += ("<h3>" + maxTemp + "&deg/" + minTemp + "&deg</h3>");
            appendStr += ("<img src='" + iconUrl + "' alt='Icon'>");
            appendStr += ("<p><strong>" + data.list[i].weather[0].main + ":</strong> " + data.list[i].weather[0].description + "</p>");
            appendStr += ("<p><strong>Humidity: </strong>" + data.list[i].humidity + "</p>");
            appendStr += ("<p><strong>Wind: </strong>" + data.list[i].speed + "</p>");
            appendStr += ("<p><strong>Pressure: </strong>" + data.list[i].pressure + "</p>");
            $(idVar).append(appendStr);
        });
    });

})();