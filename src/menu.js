const menuBtn = document.querySelector('#menuBtn');
const menuContent = document.querySelector('.menu');
const main = document.querySelector('main');
const allImg = document.querySelectorAll('.all-img');

// Store the menu status (0 = closed)
let checkNum = 0;

function mainApp() {
  function openMenu(){
    menuContent.style.visibility = "visible";
    menuContent.style.transform = "translate3d(0, 0, 0)";
    menuContent.style.transition = "all 500ms ease";
    checkNum = 1;
  };
  
  function closeMenu(){
    menuContent.style.visibility = "hidden";
    menuContent.style.transform = "translate3d(-100%, 0, 0)";
    menuContent.style.transition = "all 500ms ease";
    checkNum = 0;
  };
  
  // Check the menu status
  menuBtn.addEventListener("click", function() {
    if(checkNum == 0) {
      openMenu();
    } else {
      closeMenu();
    }
  });
  
  // Close the menu from anywhere
  main.addEventListener('click', closeMenu, false);
};

console.log('it works')
mainApp();