// menu bar//
const toggleButton = document.getElementById('toggleButton');
const naviList = document.getElementById('navi-list');

toggleButton.addEventListener('click', () => {
     naviList.classList.toggle('active');
});

//navbar sticky
window.addEventListener("scroll", function(){
     var header = document.querySelector(".navbar");
     header.classList.toggle("sticky", window.scrollY > 0);
})


//multiple modals//
var modalBtns = document.querySelectorAll(".more-details"); 

modalBtns.forEach(function(btn) {
     btn.onclick = function() {
          var modal = btn.getAttribute("data-modal");
          
          document.getElementById(modal).style.display = "grid";
     };
});


var closeBtns = document.querySelectorAll("#close");

closeBtns.forEach(function(btn) {
     btn.onclick = function() {
          var modal = (btn.closest(".modal").style.display = "none");
     };
});

window.onclick = function(e) {
     if (e.target.className === "modal"){
          e.target.style.display = "none";
     }
};


for (i=0; i<20; i++){
     console.log("Hello Worlds", i);
}


function Submit(){
     alert("Message has been submitted")
}





/*
const openBtn = document.querySelector('#login');
const closeBtn = document.querySelector('#close');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click' , openModal);

function openModal(){
     modal.style.display = 'grid';
}

closeBtn.addEventListener('click', closeModal);

function closeModal(){
     modal.style.display = 'none';
}

modal.addEventListener('click' , function(e) {
     if(e.target.classList.contains('modal')){
          closeModal();
     }

})*/

/////////////////////*data types*////////////////////////
const Name = "Dexter";
const Age = "25";
const degree = "Bachelor of Science in Information Technology";

let Value = `My name is ${Name}, my age is ${Age} and my degree is ${degree}`;
console.log(Value);







/////////////////////*arrays*////////////////////////
const fruits = ["Appple", "Banana", "Pineapple", "Avocado"];
console.log(Array.isArray(fruits));
console.log(fruits.indexOf("Avocado"));
fruits.splice(1,3);
console.log(fruits);   

/////////////////////*object literals*////////////////////////
const tao = {
     firstname: "Dexter",
     lastname: "Sumo",
     age: 25,
     favorites: ["Apple", "Banana", "Avocado", "Pineapple"],
     familyMember:{
          father: "Dexter Sr",
          mother: "Marites",
          sister: "Ave"
     }
};
console.log(tao.familyMember.father);


const Contacts = [
     {

          id: 1,
          fullname: "Dexter Sumo Jr",
          isSaved: "Phone"

     },

     {

          id: 2,
          fullname: "Dexter Sumo Sr",
          isSaved: "Phone"  

     },

     {

          id: 3,
          fullname: "Marites Sumo",
          isSaved: "SD"  


     }
];
console.log(Contacts[0].fullname);



/////////////////////*For Loops*////////////////////////
for (let i = 0; i <= 10;  i++){
console.log(i);
};



/////////////////////*While Loops*////////////////////////






