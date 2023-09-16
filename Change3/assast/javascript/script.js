    const heroimg=document.querySelector('.heroimg');
    const cont_img=document.querySelectorAll('.cont_img img');
    for (let i = 0; i < cont_img.length; i++) {
        cont_img[i].addEventListener('click' , function(e){
                const imgSrc =e.target.getAttribute('src');
                heroimg.style.backgroundImage =`url(${imgSrc})`
        })
    }