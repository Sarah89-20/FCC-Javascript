const toggleButton = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
 
toggleButton.addEventListener('click', function(){
links.classList.toggle('active') //this adds and deletes the 'active' class from the ul div section. which changes the css display options. w/ no 'active' class we have display of none. 
});