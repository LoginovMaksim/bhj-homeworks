for (let i=1; i < 10; i++) {
    let pr = document.getElementById(`hole${i}`);
    
    pr.onclick = function () {
        if (pr.classList.contains('hole_has-mole')) {
            dead.textContent = +dead.textContent + 1;

            if (dead.textContent >= 10) {
                alert('Вы выиграли! =)');
                dead.textContent = 0;
                lost.textContent = 0;
            }  

        } else {
            lost.textContent = +lost.textContent + 1;

            if (lost.textContent >= 5) {
                alert('Вы проиграли =(');
                dead.textContent = 0;
                lost.textContent = 0;
            }   
            
        }
    };
};




