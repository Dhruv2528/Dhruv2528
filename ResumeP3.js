// Name: DhruvKumar Mistry
// File: resume.js
// Date: 17 November 2024
// JavaScript animations and interactivity for resume page

document.addEventListener('DOMContentLoaded', () => {
    // Animate profile picture on hover
    const profileImg = document.querySelector('.profile-img');
    profileImg.addEventListener('mouseover', () => {
        profileImg.style.transform = 'scale(1.2)';
        profileImg.style.transition = 'transform 0.3s';
    });
    profileImg.addEventListener('mouseout', () => {
        profileImg.style.transform = 'scale(1)';
    });

    // Highlight experience section when clicked
    const experienceSection = document.querySelector('.experience');
    experienceSection.addEventListener('click', () => {
        experienceSection.style.backgroundColor = '#caf0f8';
    });

    // Rotate icons on hover
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'rotate(360deg)';
            icon.style.transition = 'transform 0.5s';
        });
    });

    // Interactive header animation
    const header = document.querySelector('.header');
    header.addEventListener('click', () => {
        header.style.backgroundColor = '#0096c7';
    });
});
