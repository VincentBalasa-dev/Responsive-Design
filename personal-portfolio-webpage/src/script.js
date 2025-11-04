let sideBarWrapper = document.getElementById('sideBar-wrapper');
let sideBar = document.getElementById('sideBar');

function toggleSideBar() {
  sideBar.classList.toggle("active");
  sideBarWrapper.classList.toggle("active");
}

function propagate(event) {
  event.stopPropagation();
}