// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigosDelSorteo = [];
id = "amigo"
function agregarAmigo(){
    let inputNombre = document.getElementById('amigo');
    let nuevoAmigo = inputNombre.value.trim();
    if (nuevoAmigo !== '') {
    // Agregar el valor al arreglo
        amigosDelSorteo.push(nuevoAmigo);
        //alert("Amigo " + nuevoAmigo + " añadido a la lista");
        //alert(amigosDelSorteo); //Para saber cómo va la lista en un alert
    //li.textContent = nuevoAmigo;
    actualizaListaAmigos();
    limpiarCaja();
    }
    else{
        alert("Por favor, inserte un nombre");
        limpiarCaja();
    }
}

function actualizaListaAmigos(){
    let lista = document.getElementById('listaAmigos'); //obtiene el ul del html para manipularlo
    lista.innerHTML = ""; //deja en blanco todo el elemento HTML
    for (let amigo of amigosDelSorteo){ //usamos of para que nos itere los valores del arreglo y no los índices
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo').value = '';
    //let valorCaja = document.querySelector('#valorUsuario')
    //valorCaja.value = '';
}

function sortearAmigo(){
    //alert("Sortear amigo");
    if ( amigosDelSorteo.length > 0){
        //alert("Amigo sorteado " + amigosDelSorteo[variableRandom]);
        let indiceSeleccion = numeroAleatorioDeUnArreglo(amigosDelSorteo);
        console.log(indiceSeleccion)
        let listaAmigos = document.getElementById('resultado');
        listaAmigos.innerHTML = "";
        const li = document.createElement('li');
        li.textContent = indiceSeleccion ;
        listaAmigos.appendChild(li);
        }
    else{
        alert("No hay ningún amigo para sortear");
    }
}

function numeroAleatorioDeUnArreglo(arreglo){
    if (arreglo.length === 0) {
        return null; // Retorna null si el arreglo está vacío
    }
    const indiceAleatorio = Math.floor(Math.random() * arreglo.length);
    return arreglo[indiceAleatorio];
};
