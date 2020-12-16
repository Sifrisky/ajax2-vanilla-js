//console.log('activado');

document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){
    //console.log('correcto');
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'datos.json', true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            //parsear json
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res = document.querySelector('#res');
            //colocamos las '' vacias para que nuestras respuestas siempre comiencen en cero y no se me escriban hacia abajo. El for es para rellenar las tablas
           res.innerHTML= '';
            //ciclo for para declarar una variable y le ponemos el of de los datos que parseamos denentro del json
            for(let item of datos){
            //console.log(item.artista);
            //console.log(item.titulo);
            res.innerHTML += `
            <tr>
            <td>${item.titulo}</td>
            <td>${item.artista}</td>
            <td>${item.precio}</td>
            </tr>
            `;
        }
        }
    } 
}