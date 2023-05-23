const buyBtns = document.querySelectorAll('.js-buy-shop'); 

const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');

function showBuyTickets() {
    modal.classList.add('open');
}

function showBuyClose() {
    modal.classList.remove('open');
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets);
}

modalClose.addEventListener('click', showBuyClose); 

