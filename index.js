//GALERIA

const galeria = document.querySelectorAll(".grid-item");
const show = document.querySelector('.imgShow');
const prevImg = show.querySelector('.img');

document.querySelectorAll('.grid .grid-item img').forEach((elemento) => {
    const ruta = elemento.getAttribute('src');
   
    elemento.addEventListener('click', () => {
        show.classList.add('show');
        document.querySelector('.imgShow img').src = ruta;
    });
});

cerrar.addEventListener('click', e => {
    show.classList.remove('show');
})

