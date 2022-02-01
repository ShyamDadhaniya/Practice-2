(function () {
    
    'use strict';

    let convertType = "miles";
    const heading = document.querySelector('h1');
    const info = document.querySelector('p');
    const answerDiv = document.getElementById('answer');
    const form = document.getElementById('convert');

    document.addEventListener('keydown', function (event) {
        
        var key = event.code;
        if (key === "KeyK") {
            convertType = 'kilometers'
            heading.innerHTML = 'Kilometers to Miles Converter';
            info.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles."       
        }
        else if (key === "KeyM"){
            convertType = 'miles'
            heading.innerHTML = 'Miles to Kilometer Converter';
            intro.innerHTML = "Type in a number of Kilometer and click the button to convert the distance to Kilometer."
        }
    });

    document.addEventListener('submit', function (event) {
        
        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);

        if (distance) {

            if ( convertType == 'miles' ) {
               const converted =( distance * 1.60934 ).toFixed(3);
                answerDiv.innerHTML = `${distance} miles convert to ${converted} kilometer`;
            } else  {
               const converted =( distance * 0.6214 ).toFixed(3);
                answerDiv.innerHTML = `${distance} kilometer convert to ${converted} miles`;
            }
            
        } else {
            answerDiv.innerHTML = '<h2>Plz enter a number!</h2>'
        }
    } );
})();