const btns = document.querySelectorAll('.btn');
const body = document.querySelector('body');

// console.log(buttons);

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        // console.log(e.target);
        if (e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'aqua'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'chocolate'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'brown'){
            body.style.backgroundColor = e.target.id;
        }
    })
})