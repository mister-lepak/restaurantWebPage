const renderHeader = () => {
  let body = document.querySelector('body');
  let header = document.createElement('div');
  let headerTitle = document.createElement('h2');

  header.setAttribute("id", "header");
  headerTitle.classList.add("hero-text");
  headerTitle.innerText = "Welcome\nto\n Le'Park Corner";

  header.appendChild(headerTitle);

  return header;
};

export {renderHeader};