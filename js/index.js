

let cad = /* html */ `
        <div class="contiene-logo">
            <a href="index.html">
                <img class="logo" src="IMG/Logo_Tu_recital.png" alt="Logo de la página Tu Recital">
                <img class="logo oscuro" src="IMG/Logo_Tu_recital_xaOscuro.png" alt="Logo de la página Tu Recital modo oscuro">
            </a>
        </div>
        <nav class="menu">
            <ul class="list">
                <li><a href="index.html";">Inicio</a></li>
                <li><a href="contacto.html">Contacto</a></li>
                <li><a href="acerca-de.html">Acerca de</a></li>
                <li><a href="galeria.html">Galería</a></li>
            </ul>
        </nav>
`


let footer =/* html */ `

<div class="logo">
<a href="index.html">
  <img class="logo" src="IMG/Logo_Tu_recital.png" alt="Logo de la página Tu Recital" width="150px">
  <img class="logo oscuro" src="IMG/Logo_Tu_recital_xaOscuro.png" alt="Logo de la página Tu Recital modo oscuro">
</a>
</div>

<div>
<ul class="redes">
  <li> <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
  <li> <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
  <li> <a href="https://twitter.com/?lang=es" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
  <li> <a href="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
</ul>
</div>

<div class="copy">
<p>Todos los derechos reservados <i class="fa fa-copyright" aria-hidden="true"></i></p>
<p>Hecho por Esteban M., Felipe V. y Federico dC. ❤</p>
</div>

`

const imagenes = document.querySelectorAll(".imagen");
const contieneImg = document.querySelector(".contiene-img");
const muestraImg = document.querySelector(".show");
const texto = document.querySelector(".texto");
const cerrar = document.querySelector(".fa-solid.fa-xmark");

document.getElementById("head").innerHTML=cad;
document.querySelector(".foot").innerHTML = footer;


imagenes.forEach(imagen => {
  imagen.addEventListener(`click`,()=>{
    addImagen(imagen.getAttribute("src"), imagen.getAttribute("alt"));
  })
})

const addImagen = (src, alt) => {
  contieneImg.classList.toggle(`centrar`);
  muestraImg.src = src;
  texto.innerHTML = alt;
}

cerrar.addEventListener("click", () => {
  contieneImg.classList.toggle(`centrar`);
})





