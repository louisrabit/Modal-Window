'use strict';



const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");


const openModel = function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}


 const closeModal = function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}


btnCloseModal.addEventListener("click", closeModal); 


for (let i = 0; i < btnShowModal.length; i++)
btnShowModal[i].addEventListener("click", openModel
   /*  console.log("button clicked") */

/* 3--- modal.classList.remove("hidden");
overlay.classList.remove("hidden"); */
);



/*  1 --btnCloseModal.addEventListener("click", function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}) */

/*2 -- overlay.addEventListener("click", function(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}) */

overlay.addEventListener("click", closeModal);