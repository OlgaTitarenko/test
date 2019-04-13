`use strict`;
const searchI = document.querySelector('.search_input');
const buttonSearch = document.querySelector('[data-button="search"]');

 function openInput(event){
     console.log(event.target);
     if ( event.target.dataset.button === 'search') {
         searchI.classList.add('is_active');
         console.log(searchI.className);
     } else {
         searchI.classList.remove('is_active');
         console.log(searchI.className);
     }
 }

 document.querySelector('body').addEventListener('click',(event)=>{

 openInput(event);
});