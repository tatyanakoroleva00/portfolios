/*This is a function which links each button with a specific text. Clicking on one button, other buttons will lose their shadows and the only pressed button will have its shadow. */

    const buttons = document.querySelectorAll('.btn');
    const btn1 = document.querySelector('#btn1');
    const btn2 = document.querySelector('#btn2');
    const btn3 = document.querySelector('#btn3');
    const btn4 = document.querySelector('#btn4');
    const btn5 = document.querySelector('#btn5');
    const btn6 = document.querySelector('#btn6');

    const text = document.querySelectorAll('.text');
    const text1 = document.querySelector('#text1');
    const text2 = document.querySelector('#text2');
    const text3 = document.querySelector('#text3');
    const text4 = document.querySelector('#text4');
    const text5 = document.querySelector('#text5');
    const text6 = document.querySelector('#text6');



    btn1.addEventListener('click', ()=> {
        text.forEach(textEl => {
            textEl.style.display = 'none';
        })
        buttons.forEach(btnEl => {
            btnEl.style.boxShadow = 'none';
        })
        text1.style.display = 'inline';
        btn1.style.boxShadow = '1px 1px 15px #00ffff'; 
    });

    btn2.addEventListener('click', ()=> {
        text.forEach(textEl => {
            textEl.style.display = 'none';
        })
        buttons.forEach(btnEl => {
            btnEl.style.boxShadow = 'none';
        })
        text2.style.display = 'inline';
        btn2.style.boxShadow = '1px 1px 15px #00ffff'; 
    });

    btn3.addEventListener('click', ()=> {
        text.forEach(textEl => {
            textEl.style.display = 'none';
        })
        buttons.forEach(btnEl => {
            btnEl.style.boxShadow = 'none';
        })
        text3.style.display = 'inline';
        btn3.style.boxShadow = '1px 1px 15px #00ffff'; 
    });

    btn4.addEventListener('click', ()=> {
        text.forEach(textEl => {
            textEl.style.display = 'none';
        })
        buttons.forEach(btnEl => {
            btnEl.style.boxShadow = 'none';
        })
        text4.style.display = 'inline';
        btn4.style.boxShadow = '1px 1px 15px #00ffff'; 
    });
        
    btn5.addEventListener('click', ()=> {
        text.forEach(textEl => {
            textEl.style.display = 'none';
        })
        buttons.forEach(btnEl => {
            btnEl.style.boxShadow = 'none';
        })
        text5.style.display = 'inline';
        btn5.style.boxShadow = '1px 1px 15px #00ffff'; 
    });
   
    btn6.addEventListener('click', ()=> {
        text.forEach(textEl => {
            textEl.style.display = 'none';
        })
        buttons.forEach(btnEl => {
            btnEl.style.boxShadow = 'none';
        })
        text6.style.display = 'inline';
        btn6.style.boxShadow = '1px 1px 15px #00ffff'; 
    });
        
    


/*This function will make the portfolio works appear or disappear*/


    const personalProjectsLink = document.querySelector('#personal-projects-link');
    const templateLink = document.querySelector('#templates-link');
    const templatesGallery = document.querySelector('#templates-gallery');
    const personalProjectsGallery = document.querySelector('#personal-projects-gallery');

    
    // function openGallery() {
    //     if (templatesGallery.style.display === 'grid') {
    //         templatesGallery.style.display = 'none';
    //     } else {
    //         templatesGallery.style.display = 'grid'
    //     }
    // }
    // templateLink.addEventListener('click', openGallery);

    function openGalleries() {
    templateLink.addEventListener('click', ()=> {
        templatesGallery.style.display = 'grid';
        templateLink.style.color = '#00ffff';
        templateLink.style.fontWeight = 'bold';

        personalProjectsGallery.style.display = 'none';
        personalProjectsLink.style.color = '#828387';
        personalProjectsLink.style.fontWeight = 'normal';
    });

    personalProjectsLink.addEventListener('click', ()=> {
        templatesGallery.style.display = 'none';
        templateLink.style.color = '#828387';
        templateLink.style.fontWeight = 'normal';
        
        personalProjectsGallery.style.display = 'grid';
        personalProjectsLink.style.color = '#00ffff';
        personalProjectsLink.style.fontWeight = 'bold';
    });
    }
    openGalleries();

    container.addEventListener('mouseover', (e)=> {
        e.style.color = 'green';
    });



