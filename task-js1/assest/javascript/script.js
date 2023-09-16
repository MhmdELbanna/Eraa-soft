const image_cont =document.querySelector('.image_cont img');
const image_list =document.querySelectorAll('.image_list img');
for(let i=0;i<image_list.length;i++){
    image_list[i].addEventListener('click',function(e){
        const imgSrc=e.target.getAttribute('src');
        console.log(imgSrc);
        image_cont.setAttribute('src',`${imgSrc}`);
    })
}
console.log(image_cont , image_list);