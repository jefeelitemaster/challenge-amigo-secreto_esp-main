// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigosDelSorteo = [];
id = "amigo"
function agregarAmigo(){
    let inputNombre = document.getElementById('amigo');
    let nuevoAmigo = inputNombre.value.trim();
        if (nuevoAmigo !== '') {
        // Agregar el valor al arreglo
        amigosDelSorteo.push(nuevoAmigo);
        alert("Amigo " + nuevoAmigo + " añadido a la lista");
        alert(amigosDelSorteo); //Para saber cómo va la lista en un alert
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = ""
        //li.textContent = nuevoAmigo;
        for (let amigo of amigosDelSorteo){
            const li = document.createElement('li');
            li.textContent = amigo;
            lista.appendChild(li);
        }
        limpiarCaja();
        }
        else{
            alert("Ingresa un valor válido, no números ni cadenas vacías");
            limpiarCaja();
        }

    
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo').value = '';
    //let valorCaja = document.querySelector('#valorUsuario')
    //valorCaja.value = '';
}

function sortearAmigo(){
    alert("Sortear amigo")
}

