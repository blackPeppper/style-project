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
// Select landing page Element
let lamdingPage = document.querySelector(".landing-page");

// Get Array of imgs
let imgsArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];


// Function To Randomize imgs
function randomizeImgs() {

    if (backgroundOption === true) {

        backgroundInterval = setInterval(() => {
            // Get Random Number
            let randomnumber = Math.floor(Math.random() * imgsArray.length);
            // Change Backgraound Image Url
            lamdingPage.style.backgroundImage = 'url("img/' + imgsArray[randomnumber] + '")';
        }, 10000);
    }
}

randomizeImgs();

// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;
    // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;
    // Window Height
    let windowHeight = this.innerHeight;
    // Window ScrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        });

    }

};
// Create Popup with THe img
let ourGallery = document.querySelectorAll('.gallery img');

ourGallery.forEach(img => {
    img.addEventListener('click',(e)=> {

        // Create Overlay Elment
        let overlay = document.createElement('div');

        // Add Class to Overlay
        overlay.className = 'popup-overlay';

        // Append Overlay To The Body
        document.body.appendChild(overlay);

        // Cearte The Popup Box
        let popupBox = document.createElement('div')

        // Add Class to The  PopupBox
        popupBox.className = 'popup-box';

        if (img.alt !== null) {

            // Create Haeding
            let imgHeading = document.createElement('h3');

            // Create text For Heading
            let imgText = document.createTextNode(img.alt);

            // Append The Text To The Heading
            imgHeading.appendChild(imgText);

            // Append The heading To The Popup Box
            popupBox.appendChild(imgHeading);
        }

        // Create The Imige
        let popupImage = document.createElement('img');

        // Set Image source
        popupImage.src = img.src;

        // Add Iamge to Popup Box
        popupBox.appendChild(popupImage);

        // Append The Popup Box to Body
        document.body.appendChild(popupBox)

        // Create The Close Span
        let closeButton = document.createElement('span');

        // Create The Close Button Text
        let closeButtonText = document.createTextNode('X');

        // Append Text To Close Button
        closeButton.appendChild(closeButtonText);

        // Add Class To Close Button
        closeButton.className = 'close-button';

        // Add Close Button To The Popup Box
        popupBox.appendChild(closeButton);
    });
});

// Close Popup
document.addEventListener("click", e => {
    if (e.target.classList == 'close-button') {
        // Remove The Current Popup
        e.target.parentNode.remove();
        // Remove Overlay
        document.querySelector('.popup-overlay').remove();
    }
});

// Remove popup Image & overlay before click on overlay
document.addEventListener('click', e => {
        if (e.target.classList == 'popup-overlay') {
            // Remove Overlay
            e.target.remove();
            // Remove The Current Popup
            document.querySelector('.popup-box').remove();
        }
});

let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let image = document.querySelector('.image');
let feedback = document.querySelector('.feedback');

const users = [{
        name: 'Hazem Shoman',
        role: 'UX Engineer',
        feedback: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        image: './img/man2.jpg'
    },
    {
        name: 'Noah Atef',
        role: 'CEO for company',
        feedback: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        image: './img/man1.jpg'
    },
    {
        name: 'John Tarkpor',
        role: 'Junior Front-end Developer',
        feedback: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        image: './img/man3.jpg'
    }
]

let slide = 0;

const navigation = () => {
    // Check slide value
    if (slide > users.length - 1) {
        slide = 0;
    }
    image.innerHTML = ` <img src="${users[slide].image}" alt=""> `
    feedback.innerHTML = ` <img src="./img/svg/pattern-quotes.svg" alt="">
    <p>${users[slide].feedback}</p>
    <h4 class="name">${users[slide].name} <span class="role">${users[slide].role}</span></h4> `;
    slide++;
}

navigation();
prevBtn.addEventListener('click', navigation);
nextBtn.addEventListener('click', navigation);
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

// // Toggle Menu
let toggleBtn = document.querySelector('.bar');
let toggleLinks = document.querySelector('.links');
let header = document.querySelector('.header');


toggleBtn.onclick = () => {
    document.querySelector(".header").classList.toggle("show");
};

document.addEventListener("click", (e) => {
    if (e.target.classList != "bar") {
        header.classList.remove("show");
    }
});

function check_hadith ( ) {

    $ .getJSON ( "https://dorar.net/dorar_api.json?skey="  + $ ( "#skey" ) .attr ( "value" )
            +  "&callback=?" ,  function (data ) {

      $ ( "#dorar" ) .html ( "" ) ;
      $ .each (data .ahadith ,  function (index ,  item ) {
        $ ( "#dorar" ) .append ( "<span class='result' >"  +  item .th  +  "</span>" ) ;
       } ) ;
     } ) ;
    
    
 }

