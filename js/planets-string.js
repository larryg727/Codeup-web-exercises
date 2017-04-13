(function () {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;
    planetsArray = planetsString.split("|");
    // TODO: Convert planetsString to an array, save it to planetsArray.

    console.log(planetsArray);
    var newString = planetsArray.join("<br>");
    console.log(newString);
    document.write(newString);
    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
    var planetsList = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";
    console.log(planetsList);
    document.write(planetsList);
    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.

    //------bonus exercise----
    console.log("-----Bonus exercise-----");


    function twentyFourToTwelve(time) {
        var currentTime = parseInt(time);
        if (currentTime < 12 && currentTime > 9) {
            console.log(time + "am");
        }else if (currentTime < 10 && currentTime > 0){
            var hrMnam = time.split(":");
            console.log(currentTime + ":" + hrMnam[1] + "am");
        }else if (currentTime === 12) {
            console.log(time + "pm");
        } else if (currentTime === 0) {
            var hrMn24 = time.split(":");
            console.log((currentTime + 12) + ":" + hrMn24[1] + "am");
        }
        else {
            var hrMn = time.split(":");
            console.log((currentTime - 12) + ":" + hrMn[1] + "pm");
        }
    }

    twentyFourToTwelve("22:37");
    twentyFourToTwelve("09:42");
    twentyFourToTwelve("10:22")
    twentyFourToTwelve("00:37");
    twentyFourToTwelve("12:37");

    console.log("----------------------");
    function twelveToTwentyFour(time) {
        var inputTime = parseInt(time);
        var amOrPm = time.substring(time.indexOf("m") - 1, time.indexOf("m") + 1);
        if (inputTime === 12 && amOrPm === "am") {
            var hrMn24 = time.split(":");
            console.log("00:" + parseInt(hrMn24[1]));
        } else if (inputTime === 12) {
            var hrMn12 = time.split(":");
            console.log((inputTime) + ":" + parseInt(hrMn12[1]));
        } else if (amOrPm === "pm") {
            var hrMnpm = time.split(":");
            console.log((inputTime + 12) + ":" + parseInt(hrMnpm[1]));
        } else if (inputTime < 10 && amOrPm === "am") {
            var hrMnamSingle = time.split(":");
            console.log("0" + (inputTime) + ":" + parseInt(hrMnamSingle[1]));
        }
        else {
            var hrMnam = time.split(":");
            console.log((inputTime) + ":" + parseInt(hrMnam[1]));
        }

    }

    twelveToTwentyFour("9:56pm");
    twelveToTwentyFour("9:56am");
    twelveToTwentyFour("12:43am");
    twelveToTwentyFour("12:37pm");

})();
