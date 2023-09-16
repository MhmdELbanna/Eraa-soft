const hero=document.querySelector('.hero');
const h1=document.querySelector('.hero h1');
const nextbtn=document.querySelector('.hero i:nth-child(3)');
const prevbtn=document.querySelector('.hero i:nth-child(1)');
let imgindex=0;
let pro=[
    {
    urlimg:'2.webp',
    contant:'farme two',
},
    {
    urlimg:'3.avif',
    contant:'farme three ',
},
    {
    urlimg:'4.webp',
    contant:'farme fure',
}

];
let nextslide= ()=>{
    imgindex++
    if(imgindex > pro.length-1){
        imgindex=0;
    }
    hero.style.backgroundImage =`url(./assast/img/${pro[imgindex].urlimg})`;
    h1.textContent=`${pro[imgindex].contant}`
}
let prev= ()=>{
    imgindex--
    if(imgindex<0){
        imgindex= pro.length-1 ;
    }
    hero.style.backgroundImage=`url(./assast/img/${pro[imgindex].urlimg})`;
    h1.textContent=`${pro[imgindex].contant}`
}
nextbtn.addEventListener('click',nextslide);
prevbtn.addEventListener('click',prev);

