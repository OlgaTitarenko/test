`use strict`;
const searchI = document.querySelector('.search_input');

 function openInput(event){

     if ( event.target.dataset.button === 'search') {
         searchI.style.transform="scale(1)";
     } else if (null === event.target.closest('.search_input')) {
         searchI.style.transform="scale(0)";
     }
 }

 document.querySelector('body').addEventListener('click',(event)=>{

 openInput(event);
});