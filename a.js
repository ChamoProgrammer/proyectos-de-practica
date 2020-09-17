let boveda = document.getElementById('colorValue');
boveda.innerHTML = '😀😎'
boveda.style.textAlign = 'center';
let btns = document.getElementsByClassName('colourBtn');
responderMensaje = document.getElementById('answer');
let body = document.getElementsByTagName('body');

function establecerColorDeBtn(boton, rojo, verde, azul)   {
    boton.setAttribute('style',   'background-color: rgb(' + rojo + ',' + verde + ',' + azul + ');'
    );
}
// colores aleatorios
function hacerColorDelValor()  {
    return Math.round(Math.random()  * 255);
} 

// iniciar juego de nuevo 
responderMensaje.innerHTML = '';
function iniciarJuego()  {


let btnRespuesta = Math.round(Math.random() * (btns.length - 1));


let i;
for(let i = 0; i < btns.length; i++)  {
    
let rojo = hacerColorDelValor();
let verde = hacerColorDelValor();
let azul = hacerColorDelValor();

establecerColorDeBtn(btns[i], rojo, verde, azul);

if (i === btnRespuesta)  {
    boveda.innerHTML = `(${rojo}, ${verde}, ${azul})`;
}

//cuando le de click me ejecute un mensaje de respuesta verdadero o falso
btns[i].addEventListener('click', function()  {
if (this === btns[btnRespuesta]) {
    responderMensaje.innerHTML = 'felicitaciones...🎉🎉🎉😊😉😚🙂🤗🤩';
}
else  {
    responderMensaje.innerHTML = 'la respuesta no es la correcta 😒👎🏾';
}
});
}
}
iniciarJuego();
    document.getElementById('reset').addEventListener('click', iniciarJuego);  