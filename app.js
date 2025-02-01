let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    
    // let listaElemento = document.getElementById("listaAmigos");

    if (amigo === "") {
        alert("Por favor, ingrese un nombre válido.");
    }

    amigos.push(amigo);
    actualizarLista();
    document.querySelector('#amigo').value='';

}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    //Bucle para recorre el array amigos y agregar cada nombre a un elemento "li"" dentro del HTML
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");   //crea elemento HTML "li"
        li.innerHTML = amigos[i];               //asigna el nombre del amigo al elemento
        lista.appendChild(li);                  //agrega elemento a "listaAmigos"
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
}
