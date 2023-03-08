let btn1 = document.querySelector('#btn1'),
    btn2 = document.querySelector('#btn2'),
    btn3 = document.querySelector('#btn3'),
    btn4 = document.querySelector('#btn4'),
    btn5 = document.querySelector('#btn5'),
    text1 = document.querySelector('#text1'),
    text2 = document.querySelector('#text2'),
    text3 = document.querySelector('#text3');
    text4 = document.querySelector('#text4');
    text5 = document.querySelector('#text5');

btn1.onclick = function() {
        btn1.style.boxShadow = '1px 1px 15px #00ffff';
        btn2.style.boxShadow = 'none';
        btn3.style.boxShadow = 'none';
        btn4.style.boxShadow = 'none';
        btn5.style.boxShadow = 'none';
        text1.style.display = 'inline';
        text2.style.display = 'none';
        text3.style.display = 'none';
        text4.style.display = 'none';
        text5.style.display = 'none';
};
btn2.onclick = function() {
        btn2.style.boxShadow = '1px 1px 15px #00ffff';
        btn1.style.boxShadow = 'none';
        btn3.style.boxShadow = 'none';
        btn4.style.boxShadow = 'none';
        text2.style.display = 'inline';
        text1.style.display = 'none';
        text3.style.display = 'none';
        text4.style.display = 'none';
        text5.style.display = 'none';
        btn5.style.boxShadow = 'none';
};
btn3.onclick = function() {    
        btn3.style.boxShadow = '1px 1px 15px #00ffff';
        btn4.style.boxShadow = 'none';
        btn1.style.boxShadow = 'none';
        btn2.style.boxShadow = 'none';
        text3.style.display = 'inline';
        text1.style.display = 'none';
        text2.style.display = 'none';
        text4.style.display = 'none';
        text5.style.display = 'none';
        btn5.style.boxShadow = 'none';
}; 

btn4.onclick = function() {    
    btn4.style.boxShadow = '1px 1px 15px #00ffff';
    btn3.style.boxShadow = 'none';
    btn1.style.boxShadow = 'none';
    btn2.style.boxShadow = 'none';
    text4.style.display = 'inline';
    text1.style.display = 'none';
    text3.style.display = 'none';
    text2.style.display = 'none';
    text5.style.display = 'none';
    btn5.style.boxShadow = 'none';
}; 
btn5.onclick = function() {    
    btn5.style.boxShadow = '1px 1px 15px #00ffff';
    btn3.style.boxShadow = 'none';
    btn1.style.boxShadow = 'none';
    btn2.style.boxShadow = 'none';
    text5.style.display = 'inline';
    text1.style.display = 'none';
    text3.style.display = 'none';
    text2.style.display = 'none';
    text4.style.display = 'none';
    btn4.style.boxShadow = 'none';
}; 

let alterego = document.querySelector('#alterego');
alterego.onclick = function() {
    alert('Under development...:)')
}
 