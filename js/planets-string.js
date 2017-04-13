(function(){
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
})();
