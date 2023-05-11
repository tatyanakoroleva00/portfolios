function connectTextWithButtons () {

let buttons = document.querySelectorAll('.btn');
let text = document.querySelectorAll('.text');

for (let i = 0; i <= buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
            buttons.forEach(item => {
                item.style.boxShadow = 'none';
            })
            text.forEach(item => {
                item.style.display = 'none';
            })
            buttons[i].style.boxShadow = '1px 1px 15px #00ffff'; 
            text[i].style.display = 'inline';
    })}
}
connectTextWithButtons();