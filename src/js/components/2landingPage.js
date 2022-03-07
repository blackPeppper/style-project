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
