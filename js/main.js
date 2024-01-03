let menubar =document.querySelector('#menubar');
let nevc = document.querySelector('.navc');

menubar.onclick = ()=>{
    //menuber.classList.toggle('fa-xmark');
    nevc.classList.toggle('active');
}



document.querySelector('#login-btn').onclick=()=>{
    document.querySelector('.loginfrm').classList.toggle('active')
}

document.querySelector('#close-login-btn').onclick=()=>{
    document.querySelector('.loginfrm').classList.toggle('active')
}