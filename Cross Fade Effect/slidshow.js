(function () {

    "use strict";

    const myImage = ['image/image1.jpg', 'image/image2.jpg', 'image/image3.jpg', 'image/image4.jpg', 'image/image5.jpg', ];
    let currentImage = 0;

    document.getElementById('next').onclick = nextImage;
    document.getElementById('previous').onclick = previousImage;

    function nextImage() {
        currentImage++;
        if( currentImage > myImage.length-1){ currentImage=0 };
        document.getElementById('myImage').src = myImage[currentImage]; 
    }

    function previousImage() {
        currentImage--;
        if( currentImage < 0){ currentImage = myImage.length-1 };
        document.getElementById('myImage').src = myImage[currentImage];
    }
    
})();