const toggleButton = document.querySelector('.sb-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn'); 
 
toggleButton.addEventListener('click', function(){
sidebar.classList.toggle('show-sidebar') 
});

closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar')
});