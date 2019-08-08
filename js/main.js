
 function myFunc(){
    document.querySelector('#myDropdown').classList.toggle('show');
}

window.onclick = function(event) {
    if(!event.target.matches('.dropbtn')){
        var dropdowns = document.querySelector('.dropdown-content');

        for(var i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
};



var btn = document.querySelector('.dropbtn');
btn.addEventListener("click", function(evt){
    evt.preventDefault();
    btn.classList.toggle('dropbtn_active');
});


var aboutMe = document.querySelector('.test-first');
aboutMe.addEventListener("mouseover", function(){
    aboutMe.classList.add('font-fist');
});