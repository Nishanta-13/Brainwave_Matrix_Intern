let list = document.querySelector('.list') ;
let items = document.querySelectorAll('.item');
let dots = document.querySelectorAll('.dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let active = 0;
console.log(lengthItems);
let lengthItems=items.length - 1;
next.oneclick = function(){
    if(active+=1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider()
   
}
prev.oneclick = function(){
    if(active - 1 <0){
        active = lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(()=>{
    next.click()},3000);

function reloadSlider(){
   let checkLeft = items[active].offsetLeft;
   list.computedStyleMap.left = -checkLeft+'px'; 
   let lastActiveDot = document.querySelector('.slider .dots li.active')    
   lastActiveDot.classList.remove('active');
    dots[active].classList.add('active'); 
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=>{
        next.click()},3000);
}
dots.forEach((li,key) => {
    li.addEventListener('click',function(){
        active = key;
        reloadSlider();
    })
})
