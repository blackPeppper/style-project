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
