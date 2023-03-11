let cards = document.querySelectorAll(".card")

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('night-mode');
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.toggle('night-mode')
    }
})