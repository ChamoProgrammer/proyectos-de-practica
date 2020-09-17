//Grab day of the week from local computer
let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;

switch(dayOfWeekNumber){
    case 1: 
        nameOfDay = 'Sunday';
        quote = '¡Es hora de relajarse!😷';
        break;
    case 2:
        nameOfDay = 'Monday';
        quote = 'Lunes por la mañana azul!';
        break;
    case 3:
        nameOfDay = 'Tuesday';
        quote = 'tiempo de unos tacos..🌮🌮🌮';
        break;
    case 4:
        nameOfDay = 'Wednesday';
        quote = 'Dos días más para el fin de semana...😊';
        break;
    case 5:
        nameOfDay = 'Thursday';
        quote = 'El fin de semana ya casi está aquí...🤩';
        break;
    case 6:
        nameOfDay = 'Friday';
        quote = '¡El fin de semana está aquí!😜😝';
        break;
    case 7:
        nameOfDay = 'Saturday';
        quote = '¡Tiempo de fiesta!👯‍♂️🥵';
        break;

}
//Display the day of the week
let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

//Display quote
let quoteDiv = document.getElementById('phrase');
quoteDiv.innerHTML = `${quote}`
