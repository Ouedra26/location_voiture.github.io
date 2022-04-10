let compteur = 0 /* Le comteur qui montre l'image active */

let timer, composants, slides, slideWidth;
// On recupère le carousel

const carousel = document.querySelector('.carousel');

composants = document.querySelector('.composants');
// On clone la1 image
let firstImage = composants.firstElementChild.cloneNode(true);
// On inject le clone à la fin du carousel
composants.append(firstImage);

slides = Array.from(composants.children);
// On recupère la taille du carousel
slideWidth = carousel.getBoundingClientRect().width



// Flêches

let next = document.querySelector("#nav-droit");
let prev = document.querySelector("#nav-gauche");

// On gère le click
next.addEventListener("click", slideNext);
prev.addEventListener("click", slidePrev);

// On automatise le défilement

timer = setInterval(slideNext, 10000);

// cette fonction fait déliler l'image à droite
function slideNext() {
    // increment

    compteur++;
    composants.style.transiton = "1s linear";

    let decal = -slideWidth * compteur;
    composants.style.transform = `translateX(${decal}px)`;

    // On attend la fin de la transition et on rembobine
    setTimeout(function() {
        if (compteur >= slides.length - 1) {
            compteur = 0;
            composants.style.transiton = "unset";
            composants.style.transform = "translateX(0)";
        }
    }, 1000);
}
// Défilement à gauche
function slidePrev() {
    // On decrement

    compteur--;
    composants.style.transition = "1s linear";

    if (compteur < 0) {
        compteur = slides.length - 1;
        let decal = -slideWidth * compteur;

        composants.style.transiton = "unset";
        composants.style.transform = `translateX(${decal}px)`;
        setTimeout(slidePrev, 1);

    }

    let decal = -slideWidth * compteur;
    composants.style.transform = `translateX(${decal}px)`;
}



















// function monDiapo() {
//     varImg += 1; /* affectation et incrementation */

//     imgDiapo.setAttribute('src', 'img/' + varImg + '.jpg');

//     if (varImg == 3) {
//         clearInterval(timer);
//     }
// }


// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel, {
//     interval: 15000,
//     /* Je definis l'interval à 10000 milisecondes cad 10s */
//     wrap: false /* L'instruction wrap permet de definir si l'on veut que notre carousel reprenne à chaque fois dépuis la 1 image. Ici il est defini sur false, le carousel s'arretra donc à la fin du 1 passage */
// })