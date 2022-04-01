// let txt = document.querySelectorAll

// variable element
const txE=document.querySelector('.tte')
const ifr=document.querySelector('iframe')
const btn=document.querySelector('button')


// click event when button is clicker
btn.addEventListener("click",function(){
    const html = txE.textContent
    ifr.src = "data:text/html;charset=utf-8," + encodeURI(html);
});

// realtime event auto relog
txE.addEventListener("keyup",function(){
    const html = txE.textContent
    ifr.src= "data:text/html;charset=utf-8," + encodeURI(html);
});


