/*const openBtn = document.querySelector('button');
const closeBtn = document.querySelector('#close');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click' , openModal);

function openModal(){
     modal.style.display = 'grid';
}

closeBtn.addEventListener('click', closeModal);

function closeModal(){
     modal.style.display = 'none';
}*/


const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', Onsubmit);

function Onsubmit(e){
    e.preventDefault()  
    
    if(username.value === "" , password.value === ""){
        alert("invalid");  
    }else{
        alert("ok");
    }
}

