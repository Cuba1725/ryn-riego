const images = document.querySelectorAll('.grid-item');
const containerImage = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const cerrar = document.querySelector('.fa-times-circle');

images.forEach(image => {
    image.addEventListener('click', ()=> {
        
        addImage(image.getAttribute('src'))
    });
});

const addImage = (src) =>{
    containerImage.classList.toggle('mover');
    imageContainer.classList.toggle('show');
    imageContainer.src = src
}

cerrar.addEventListener('click', ()=> {
    containerImage.classList.toggle('mover');
    imageContainer.classList.toggle('show');
})

