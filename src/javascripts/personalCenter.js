import css from '../styles/personalCenter.css'

window.onload = function() {
    let h4 = document.querySelectorAll('h4')[0];

    var text = h4.innerText;

    h4.innerHTML = text + '<br /> its js file also works';

    console.log(text);
}