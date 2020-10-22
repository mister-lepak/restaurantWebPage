const renderNavbar = () => {
  let navBar = document.createElement('nav');
  navBar.classList.add('bg-color');
  navBar.innerText = "Le'Park Corner";
  return navBar;
};

export { renderNavbar };