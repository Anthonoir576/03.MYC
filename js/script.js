/* // Variables - Constantes 

// ####### 1one.scss #######


// ####### 2two.scss #######

const aside = document.querySelector('.aside-JS');
const article = document.querySelector('.article-JS');

// PERMET de récupéré la hauteur de l'element quelque soit ca hauteur, en cas de changement responsive par exemple
let screen2 = aside.clientHeight;
// ####### 3three.scss #####


// ####### 4four.scss ######


// ####### 5five.scss ######


// ####### 6six.scss #######

window.addEventListener('scroll', () => {

    if(window.scrollY > 400) {

        aside.classList.add('scroll');

    }
    else{

        aside.classList.remove('scroll');

    }
    
});

window.addEventListener('scroll', () => {

    if(window.scrollY > screen2) {

        aside.classList.add('scroll');

    }
    else{

        aside.classList.remove('scroll');

    }
    
}); 

*/


const ratio = .1

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}


// REVEAL LEFT
const myScrollLeft = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('reveal-visible-L')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(myScrollLeft, options)
    document.querySelectorAll('.reveal-L').forEach(function (r) {

        observer.observe(r)

    })
})





// REVEAL RIGHT
const myScrollRight = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('reveal-visible-R')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(myScrollRight, options)
    document.querySelectorAll('.reveal-R').forEach(function (r) {

        observer.observe(r)

    })
})





// SKILL BAR
const skillbar = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('valide')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(skillbar, options)
    document.querySelectorAll('.invalide').forEach(function (r) {

        observer.observe(r)

    })
})












