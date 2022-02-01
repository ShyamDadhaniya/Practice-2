(function () {
    

    'use strict';

    document.getElementById ('convert').addEventListener('submit' , function (event) {

        event.preventDefault();

        var distance = parseFloat(document.getElementById('distance').value);
        var conversion = distance * 1.60934.toFixed(3);
        var answer = document.getElementById('answer');
        if (distance) {
            
            answer.innerHTML = `<h2> ${distance} miles convert in to ${conversion}kilometers </h2>`;
            // var conversion = distance * 1.60934;
            // var roundedConversion = conversion.toFixed(3);
            // alert(roundedConversion);
        } 
        else {
            answer.innerHTML = '<h2>Plz enter a number!</h2>'
            // answer.innerHTML = `<h2> plz enter a number! </h2>`;
        }
    });
})();