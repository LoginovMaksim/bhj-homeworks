const modalWindowAfter = document.getElementById('modal_main');
modalWindowAfter.className = 'modal modal_active';

const btnClickClose = document.getElementsByClassName('modal__close');
const modalWindowBefore = document.getElementById('modal_success');

for (let i = 0; i < btnClickClose.length; i++) {

    btnClickClose[i].onclick = function () {

        modalWindowAfter.className = 'modal';

        if (btnClickClose[i].classList.contains('show-success') == true) {
            modalWindowBefore.className = 'modal modal_active';
        }

        if (btnClickClose[i].classList.contains('modal__close_times') == true) {
            modalWindowBefore.className = 'modal';
        }
    }
}









