const renderFooter = () => {
  let footer = document.createElement('div');
  footer.setAttribute("id", "footer");
  footer.innerText = "Le'Park Corner";
  return footer;
};

export { renderFooter };