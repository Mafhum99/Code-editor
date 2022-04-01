// variable element
const txE=document.querySelector('.tte')
const ifr=document.querySelector('iframe')
const btn=document.querySelector('button')


// click event when button is clicker
btn.addEventListener("click",()=>{
    const html = txE.textContent
    ifr.src = "data:text/html;charset=utf-8," + encodeURI(html);
});

// realtime event auto relog
txE.addEventListener("keyup",()=>{
    const html = txE.textContent
    ifr.src= "data:text/html;charset=utf-8," + encodeURI(html);
});

//autofocus effect
window.onload=()=>{
    const html = txE.textContent
    ifr.src= "data:text/html;charset=utf-8," + encodeURI(html);
    txE.focus();
}


