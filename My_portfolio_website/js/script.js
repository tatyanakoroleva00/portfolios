let btn1 = document.querySelector('#btn1'),
    btn2 = document.querySelector('#btn2'),
    btn3 = document.querySelector('#btn3'),
    text1 = document.querySelector('#text1'),
    text2 = document.querySelector('#text2'),
    text3 = document.querySelector('#text3'); 

btn1.onclick = function() {
    if (text1.style.display === 'none') {
        text1.style.display = 'inline';
        text2.style.display = 'none';
        text3.style.display = 'none';
    } else {
        text1.style.display = 'none';
    }
};

btn2.onclick = function() {
    if (text2.style.display === 'none') {
        text2.style.display = 'inline';
        text1.style.display = 'none';
        text3.style.display = 'none';
    } else {
        text2.style.display = 'none';
    }
};

btn3.onclick = function() {    
    if (text3.style.display === 'none') {
        text3.style.display = 'inline';
        text1.style.display = 'none';
        text2.style.display = 'none';
    } else {
        text3.style.display = 'none';
    }
}; 
