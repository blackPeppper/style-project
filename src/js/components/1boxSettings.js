// Check if There's local storge Color option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {

    document.documentElement.style.setProperty('--main-color', mainColors);

    // Remove Active class From All Colors list items
    document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove("active");

        // Add Active Class On Element with Data-Color === local Storage Item
        if (element.dataset.color === mainColors) {
            // Add Active Class
            element.classList.add("active");
        }
    });
}

// Random Background Option
let backgroundOption = true;

// variable To control The Interval
let backgroundInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If random Background Local Storage Is empty

if (backgroundLocalItem !== null) {
    // Rmove Active Class From All spans
    document.querySelectorAll(".random-background span").forEach(element => {

        element.classList.remove("active");

    });

    if (backgroundLocalItem === 'true') {

        backgroundOption = true;
        document.querySelector(".random-background .yes").classList.add("active");

    } else {
        backgroundOption = false;
        document.querySelector(".random-background .no").classList.add("active");
    }
}


// Toggle Spin Class on Icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
    // Toggle Class Fa-spin For Rotation on self
    this.classList.toggle("fa-spin");
    // Toggel Class Open On Main Setting Box
    document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
const colorsli = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsli.forEach(li => {
    // Click On Every List Items
    li.addEventListener("click", (e) => {
        // Set Color On Root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        // Set Color on local storage
        localStorage.setItem("color_option", e.target.dataset.color);
        // Remove Active class From All Childrens
        handleActive(e);

    });
});

// Switch Random Background Option
const randomBackgroundEl = document.querySelectorAll(".random-background span");

// Loop On All Spans
randomBackgroundEl.forEach(span => {
    // Click On Every span
    span.addEventListener("click", (e) => {

        handleActive(e);

        if (e.target.dataset.background === 'yes') {
            backgroundOption = true;
            randomizeImgs();

            localStorage.setItem("background_option", true);
        } else {
            backgroundOption = false;

            clearInterval(backgroundInterval);

            localStorage.setItem("background_option", false);
        }

    });
});


const handleActive = evenet => {
    // Remove Active class From All Childrens
    evenet.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");

    });

    // Add Active Class On Self
    evenet.target.classList.add("active");
};

// Select All Bullets
let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {
    bulletsSpan.forEach(span => {
        span.classList.remove("active");
    });

    if (bulletLocalItem === "block") {
        bulletsContainer.style.display = 'block';

        document.querySelector(".bullets-option .yes").classList.add("active");
    } else {
        bulletsContainer.style.display = 'none';

        document.querySelector(".bullets-option .no").classList.add("active");

    }
}

bulletsSpan.forEach(span => {
    span.addEventListener('click', e => {

        if (span.dataset.display === 'show') {

            bulletsContainer.style.display = 'block';

            localStorage.setItem("bullets_option", 'block');
        } else {

            bulletsContainer.style.display = 'none';

            localStorage.setItem("bullets_option", 'none');
        }
        handleActive(e);
    });
});


// Reset Button
document.querySelector(".reset-options").onclick = function () {

    localStorage.removeItem('background_option');
    localStorage.removeItem('bullets_option');
    localStorage.removeItem('color_option');

    // reload window
    window.location.reload();
}