$(document).ready(function(){
     // Initialize tooltip with modal opening
 const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
 tooltipTriggerList.map(function (tooltipTriggerEl) {
     return new bootstrap.Tooltip(tooltipTriggerEl);
 });

 // Add click event to open modal
 document.getElementById('modalButton').addEventListener('click', function () {
     const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
     modal.show();
 });  
});
// TOOLTIP FUNCTION
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })



 // Select all links with the class 'scroll-up'
 const scrollLinks = document.querySelectorAll('.scroll-up');

 scrollLinks.forEach(link => {
     link.addEventListener('click', function(event) {
         event.preventDefault(); // Prevent default anchor behavior
         
         // Scroll upward
         window.scrollBy({
             top: -window.innerHeight, // Scroll up by one viewport height
             behavior: 'smooth' // Smooth scrolling effect
         });
     });
 });