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
        divPadre.classList.add('bg-blue-500', 'fixed', 'w-full', 'start-0', 'h-52', 'flex', 'flex-col', 'items-center', 'justify-center')
        divPadre.id = 'tareaIngresada';

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

        if(agregarTarea){
            console.log(agregarTarea);
        }
    });

    recopilarTareas();
}

//Objeto de las tareas que se realizan.

const tareasAlHacer = {

}

//Formulario y extracción de su información
let contadorLista = 1;
function recopilarTareas() {
    btnDivPadre.addEventListener('click', () => {

        let valor = inputDivPadre.value
        let alertaVacio = document.createElement('P');

        if (valor === '') {
            alertaVacio.textContent = 'No has ingresado ningun objetivo';
            divPadre.appendChild(alertaVacio);
            alertaVacio.classList.add('bg-red-500', 'w-6/12', 'text-center', 'py-2');

            btnDivPadre.addEventListener('click', () => {
                if (alertaVacio.classList.contains('bg-red-500')) {
                    alertaVacio.remove();
                }
            })

            btnCerrarPadre.addEventListener('click', () => {
                if (alertaVacio.classList.contains('bg-red-500')) {
                    alertaVacio.remove();
                }
            })

        
            return;
        }

        if (valor) {
            console.log('temach')
        }

        tareasAlHacer[`Tarea ${contadorLista}`] = valor;
        contadorLista++;
        agregarPagina();
    })
}

//Al madar enviar quitar el anuncio de agregar tarea
function cerrarAgregarTareas() {
    btnCerrarPadre.addEventListener('click', () => {
        if (divPadre.classList.contains('bg-blue-500')) {
            divPadre.remove();
        }
    })
}

//Colocar la informacion del objeto 

function agregarPagina() {
    let contenidoHTML = '';
    lista.classList.add('flex', 'flex-col', 'gap-5');
    for (let key in tareasAlHacer) {
        if (tareasAlHacer.hasOwnProperty(key)) {
            contenidoHTML += `
            <div class="flex items-center justify-between  w-full">
                <div class="flex items-center gap-4"> 
                    <div class="h-6 w-6 bg-blue-500 rounded-full"></div> 
                    <p class="py-3 max-w-sm overflow-clip">${tareasAlHacer[key]}</p>
                </div>
                <div class="h-6 w-6 bg-red-500 rounded-full flex justify-center" id="quitarObjetivo">X</div>
            </div>`
        }
    }

    lista.innerHTML = contenidoHTML;
  
}
