
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const avatar = document.querySelector('.avatar');

avatar.addEventListener('mouseover', () => {
    avatar.style.boxShadow = "0 0 35px #4da6ff";
});

avatar.addEventListener('mouseout', () => {
    avatar.style.boxShadow = "0 0 20px #4da6ff";
});
