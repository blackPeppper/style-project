// Select All  Bullets
let allBullets = document.querySelectorAll('.nav-bullets .bullets');

// Select All  Links
let allLinks = document.querySelectorAll('.links li');


const scrollToSomeWere = (elements) => {
    elements.forEach( ele => {

        ele.addEventListener('click', e => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

scrollToSomeWere(allBullets)
scrollToSomeWere(allLinks)