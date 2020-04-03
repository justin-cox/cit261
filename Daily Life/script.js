document.getElementById("open-socials").addEventListener("click",() => {
    // move to right side of screen when opened
    const youtube = window.open('https://www.youtube.com', 'YouTube', 'width=775, height=1000, resizable=yes');
    youtube.moveTo(1000, 0);
    // move to left side of screen when opened
    const facebook = window.open('https://facebook.com', 'FaceBook', 'width=775, height=1000, resizable=yes');
    facebook.moveTo(0,0);
});

document.getElementById('research').addEventListener('click', () => {
    const stackOverflow = window.open('https://stackoverflow.com');
    const sitePoint = window.open('https://www.sitepoint.com/premium/library');
    const gitHub = window.open('https://github.com');
});

document.getElementById('tutorials').addEventListener('click', () => {
    const freeCodeCamp = window.open('https://www.freecodecamp.org');
    const derekBanas = window.open('https://www.youtube.com/user/derekbanas/videos');
    const codeCademy = window.open('https://www.codecademy.com');
    const linkedInLearning = window.open('https://www.linkedin.com/learning');
});

