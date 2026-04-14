// Select all images inside div class gallery
let galleryImages = document.querySelectorAll(".gallery img");

let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightboxImg");
let caption = document.getElementById("lightboxCaption");

let currentIndex = 0;

// Open lightbox
galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        // Makes the hidden lightbox element become visible on the page by changing the style from display none to display block
        lightbox.style.display = "block";

        // Get image URL from the <img src="" >
        lightboxImg.src = img.src;

        // Get image alternative text from the <img alt=""> for the caption text
        caption.innerText = img.alt;
        currentIndex = index;
    });
});

// Close
document.getElementById("closeBtn").onclick = function () {
    lightbox.style.display = "none";
};

// Next
document.getElementById("nextBtn").onclick = function () {
    currentIndex++;
    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }
    updateImage();
};

// Previous
document.getElementById("prevBtn").onclick = function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }
    updateImage();
};

// Update image
function updateImage() {
    lightboxImg.src = galleryImages[currentIndex].src;
    caption.innerText = galleryImages[currentIndex].alt;
}

// Close on background click
lightbox.onclick = function (e) {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
};

// Keyboard keys control
document.addEventListener("keydown", function (e) {
    if (lightbox.style.display === "block") {
        if (e.key === "ArrowRight") {
            document.getElementById("nextBtn").click();
        }
        if (e.key === "ArrowLeft") {
            document.getElementById("prevBtn").click();
        }
        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }
    }
});