// ImageP2.js

// Main elements
const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumbnail');
const darkenButton = document.getElementById('darken');

// Thumbnail click to update main image
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src; // Update main image source
        mainImage.alt = thumbnail.alt; // Update main image alt text
    });
});

// Darken button functionality
darkenButton.addEventListener('click', () => {
    const currentOpacity = parseFloat(mainImage.style.opacity) || 1;
    mainImage.style.opacity = currentOpacity > 0.5 ? currentOpacity - 0.1 : 1; // Toggle darken effect
});
