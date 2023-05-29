document.addEventListener('DOMContentLoaded', () => {
    agregarTareas();
});

//Abrir panel de agregar tarea
const agregarTarea = document.querySelector('#agregarTarea');
const listaTareas = document.querySelector('#listaTareas');
const lista = document.querySelector('#lista');

//Elementos creados por el dom
const inputDivPadre = document.createElement('input');
const btnDivPadre = document.createElement('input');
const btnCerrarPadre = document.createElement('input');
const divPadre = document.createElement('form');

function agregarTareas() {
    cerrarAgregarTareas();
    agregarTarea.addEventListener('click', () => {
       //Dentro contenedor se pone el input
        divPadre.appendChild(inputDivPadre);
        //boton de agregar tarea
        divPadre.appendChild(btnDivPadre);
        //Botorn de cerrar
        divPadre.appendChild(btnCerrarPadre);
        //colocamos contenedor div padre dentro del html
        listaTareas.appendChild(divPadre);

        
        //Agregar estilos
        //div padre esttilos
        divPadre.classList.add('bg-blue-500', 'fixed', 'w-full', 'start-0', 'h-48', 'flex', 'flex-col', 'items-center', 'justify-center')
        divPadre.id ='tareaIngresada';

        //Estilos al input
        inputDivPadre.classList.add('w-11/12', 'py-2');
        inputDivPadre.placeholder = 'Ingrese su proximo objetivo';
        inputDivPadre.type = 'text';
        inputDivPadre.name = 'objetivos'
        
        //Estilos del boton 
        //boton enviar
        btnDivPadre.classList.add('bg-white', 'm-4', 'py-1', 'px-8');
        btnDivPadre.type = 'button';
        btnDivPadre.value = 'Enviar';
        //boton de cerrar tareas
        btnCerrarPadre.classList.add('bg-red-500', 'm-1', 'py-1', 'px-8');
        btnCerrarPadre.type = 'button';
        btnCerrarPadre.value = 'Cerrar';
        btnCerrarPadre.id = 'cerrarTareas';
        console.log(btnCerrarPadre);
    });

    recopilarTareas();
}

//Objeto de las tareas que se realizan.

const tareasAlHacer = {

}

//Formulario y extracción de su información
let contadorLista = 1
function recopilarTareas() {
    btnDivPadre.addEventListener('click', (e) =>{
        agregarPagina();

        let valor = inputDivPadre.value
        if(valor === '') {
            return console.log('funciona');
        }
        tareasAlHacer[`Tarea ${contadorLista}`] = valor;
        contadorLista++;
    })
}

//Al madar enviar quitar el anuncio de agregar tarea
function cerrarAgregarTareas() {
    btnCerrarPadre.addEventListener('click', () => {
        if(divPadre.classList.contains('bg-blue-500')) {
            divPadre.remove();
        }
    }) 
}

//Colocar la informacion del objeto 

function agregarPagina() {
    let contenidoHTML = '';
    for (let key in tareasAlHacer) {
      if (tareasAlHacer.hasOwnProperty(key)) {
        contenidoHTML += `<p>${key}: ${tareasAlHacer[key]}</p>`;
      }
    }

    lista.innerHTML = contenidoHTML;
    console.log(contenidoHTML);
}

