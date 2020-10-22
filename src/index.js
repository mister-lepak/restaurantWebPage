import { renderNavbar }   from './navbar';
import { renderHeader }   from './header';
import { renderContent }  from './content';
import { renderFooter }   from './footer';


let body = document.querySelector('body');
let content = document.querySelector('#content');

document.addEventListener("DOMContentLoaded", () => {
  // Navbar
  body.insertBefore(renderNavbar(), content);

  // Header
  body.insertBefore(renderHeader(), content);

  // Content
  content.appendChild(renderContent());
  document.querySelector('.tabs li').click();
  document.querySelector('.tabs li').click();

  // Footer
  body.appendChild(renderFooter());
});
