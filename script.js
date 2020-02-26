
// Imagenes que van a la diapositivas 
var imagenes = ["imagenes/verduras.png" , "imagenes/limones.png" , "imagenes/pizza.png", "imagenes/carne.png"]
    var cont = 0;

function carrusel (contenedor) {
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras');
        let adelante = contenedor.querySelector('.adelante');
        let img = contenedor.querySelector('img');
        let tgt = e.target;


    if (tgt == atras) {


        if (cont > 0) {
            img.src = imagenes[cont - 1];
            cont--;
        }
            else {
                img.src = imagenes[imagenes.length - 1]
                cont = imagenes.length - 1;
            }

    }

    else if (tgt == adelante) {

        if (cont < imagenes.length - 1) {
            img.src = imagenes[cont + 1];
            cont++;
        }
            else {
                img.src = imagenes[0]
                cont = 0;
            }
    }
    })
}

// Una vez cargada la pagina, se desplazan las imagenes

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector(".contenedor");

    carrusel(contenedor);

});

// Audios de los botones 

function audio (e) {
    var reproducir = new Audio();
    reproducir.src = e;
    reproducir.play();
}

window.addEventListener("load", function() {
    document.querySelectorAll(".atras")[0].addEventListener("click", function() {
        audio("audios/UI Show.mp3")
    })
    false
}, false);

window.addEventListener("load", function() {
    document.querySelectorAll(".adelante")[0].addEventListener("click", function() {
        audio("audios/UI Hide.mp3")
    })
    false
}, false);