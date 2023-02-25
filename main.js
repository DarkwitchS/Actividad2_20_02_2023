/* function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
} */
//la barra de menú, se actualiza por el tamaño de la pantalla
let myToggle = document.querySelector(".toggle")
let myNavigation = document.querySelector(".navigation")

myToggle.addEventListener("click", (e)=>{
    e.target.classList.toggle('active');
    myNavigation.classList.toggle('active');
})

/* function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
 */
//cambio de imágenes dinámico y colores
let myThumb = document.querySelector(".thumb");
let myStarbucks = document.querySelector(".starbucks");
let myCircle = document.querySelector(".circle");

myThumb.addEventListener("click", (e)=>{
    let myEtiqueta = e.target;
    if(myEtiqueta.localName == "img"){
        let myStyle = JSON.parse(myEtiqueta.dataset.toggle);
        myStarbucks.src = myStyle.img;
        myCircle.style.background = myStyle.color;
    }
})
