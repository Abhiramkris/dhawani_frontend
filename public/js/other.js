function openTab(tabId) {

  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => button.classList.remove('active'));

  
  document.getElementById(tabId).classList.add('active');
  const activeButton = Array.from(buttons).find(button => button.innerText === tabId.replace('tab', 'Tab '));
  activeButton.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => openTab('tab1'));

