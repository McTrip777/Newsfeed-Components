
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle("menu--open");
};
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

const hover = document.querySelectorAll('.menu li');
hover[0].addEventListener('mouseover', e =>{
	e.target.style.color = "white";
	e.target.style.backgroundColor = "black";
setTimeout(function() {
  e.target.style.color = "";
  e.target.style.backgroundColor = "";

	}, 1000);
}, false);