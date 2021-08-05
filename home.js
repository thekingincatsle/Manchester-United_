
let first = document.querySelector('.first');
function radio1(){
    first.classList.add('radio1');
    first.classList.remove('radio2');
first.classList.remove('radio3');
first.classList.remove('radio4');
};
function radio2(){
    first.classList.add('radio2');
    first.classList.remove('radio1');
first.classList.remove('radio3');
first.classList.remove('radio4');
};function radio3(){
    first.classList.add('radio3');
    first.classList.remove('radio2');
first.classList.remove('radio1');
first.classList.remove('radio4');
};function radio4(){
    first.classList.add('radio4');
    first.classList.remove('radio3');
first.classList.remove('radio2');
first.classList.remove('radio1');
};

