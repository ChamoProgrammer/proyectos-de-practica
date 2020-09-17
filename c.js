let cuadroEntradasTareasPendientes = document.getElementById('todo-entry-box');
let listaQuehaceres = document.getElementById('todo-list');
let todoElBtn = document.getElementById('add-btn');
let eliminarBtn = document.getElementById('clear-completed-btn')
let vaciarLista = document.getElementById('emtpy-btn');
let guardarBtn = document.getElementById('save-btn');

todoElBtn.addEventListener('click', añadirParaHacerArticulo);
eliminarBtn.addEventListener('click', eliminarBoton);
vaciarLista.addEventListener('click', vaciarListaDeUnaVez);
guardarBtn.addEventListener('click', guardarBoton);

// function añadirParaHacerArticulo()  {    alert('😎')  }
// function eliminarBoton()  {  alert('😉')  }
// function vaciarListaDeUnaVez()  {    alert(' 😴') }
// function guardarBoton()  {   alert('😛GUARDADO😜')   }

// agregar elementos para hacer
function elementoParaHacer(textoArticulo, completed)   {
    let elementoTarea = document.createElement('li');
    let elementoTexto = document.createTextNode(textoArticulo);
    elementoTarea.appendChild(elementoTexto);

    if (completed)  {
        elementoTarea.classList.add('completed');
    }
    listaQuehaceres.appendChild(elementoTarea);
    elementoTarea.addEventListener('dblclick', alternarEstadoLista);
}
// si la tarea o esta completa
 function añadirParaHacerArticulo()  {
     let textoArticulo = cuadroEntradasTareasPendientes.value;
     elementoParaHacer(textoArticulo, false);
 }

 //completar elementos  
 function alternarEstadoLista()  {
     if (this.classList.contains('completed'))  {
        this.classList.remove('completed');
    }
     else  {
         this.classList.add('completed');
     }
 }
//eliminar elementos
function eliminarBoton()    {
    let completaTarea = listaQuehaceres.getElementsByClassName('completed');

    while (completaTarea.length > 0)  {
        completaTarea.item(0).remove();
    }
}
function vaciarListaDeUnaVez()    {
    let cosasQueHacer = listaQuehaceres.children;
    while (cosasQueHacer.length > 0)  {
        cosasQueHacer.item(0).remove();
    }
}
//guardar lista
let miMatriz = [];
miMatriz.push('"¿que va a almacenar..😑😑?');
miMatriz.push('"¿tiene algo mas para almacenar..😊🤗🤔🤨?');
alert(miMatriz[0]);


function guardarBoton()  {
    let todos = [];
    for (let i = 0; listaQuehaceres.children.length; i++)   {
        let todo = listaQuehaceres.children.item(i);
       
        let todaInfo =  {
            'tarea': todo.innerText,
            'completed': todo.classList.contains('completed')
        };
        todos.push(todaInfo);
    }
    localStorage.setItem('todos', JSON.stringify(todos));
}
// cargar la lista guardada  
function listaDeCarga()    {
    if (localStorage.getItem('todos') != null)  {
        let todos = JSON.parse(localStorage.getItem('todos'));  

        for (let i = 0; i < todos.length; i++) {
            const todo = todos[i];
            elementoParaHacer(todo.tarea, todo.completed)
        }
    }
}
listaDeCarga();