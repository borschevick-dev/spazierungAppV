const noButton = document.getElementById('no-button');

noButton.addEventListener('mouseenter', () => {

    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
});


document.getElementById('yes-button1')
  .addEventListener('click', () => location = 'you-pay.html');


document.getElementById('yes-button2')
  .addEventListener('click', () => location = 'happy-page.html');
const button = document.querySelector('.page-end');

function updateButton() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    const scrollProgress = (scrollTop + windowHeight) / fullHeight;

    // появляется только в конце (80%+ страницы)
    if (scrollProgress > 0.8) {
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
}

window.addEventListener('scroll', updateButton);
window.addEventListener('resize', updateButton);

updateButton();