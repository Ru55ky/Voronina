var modal = document.querySelector('#myModal');
var photo = document.querySelector('.desktop-first-img');

photo.addEventListener('click', function () { 
    modal.style.display = "block";
 });
 var close = document.querySelector('.close');
 close.addEventListener('click', function(){
     modal.style.display = "none";
 });