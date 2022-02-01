(function () {

    "use strict"
    var currentImage = 0;
    var myImage = ['image/image1.jpg', 'image/image2.jpg', 'image/image3.jpg', 'image/image4.jpg', 'image/image5.jpg', ];
    var container = document.getElementById('content');
    var nextBtn = document.getElementById('next');
    var prevBtn = document.getElementById('previous');
    

    nextBtn.addEventListener('click' , function (event) {
        event.preventDefault();

        currentImage++;
        if (currentImage > myImage.length-1) {
            currentImage = 0;
        }   

        // var newSlide = document.createElement('img');
        // newSlide.src = `${myImage[currentImage]}`;
        // newSlide.className = 'fadeinimg'
        // container.appendChild(newSlide);

        // if (container.children.length > 2) {
        //     container.removeChild(container.children[0]);
        // }
        swapImage();
    });

    prevBtn.addEventListener('click' , function (event) {
        event.preventDefault();

        currentImage--;
        if (currentImage > 0) {
            currentImage = myImage.length-1;
        }   

        // var prevSlide = document.createElement('img');
        // prevSlide.src = `${myImage[currentImage]}`;
        // prevSlide.className = 'fadeinimg'
        // container.appendChild(prevSlide);

        // if (container.children.length > 2) {
        //     container.removeChild(container.children[0]);
        // }
        swapImage();
    });

    function swapImage() {
        var prevSlide = document.createElement('img');
        prevSlide.src = `${myImage[currentImage]}`;
        prevSlide.className = 'fadeinimg'
        container.appendChild(prevSlide);

        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }    
    }
    
})();