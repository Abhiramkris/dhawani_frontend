function openTab(tabId, parentGroup = '') {
  // Identify the parent container for tabs if provided
  const container = parentGroup ? document.getElementById(parentGroup) : document;

  // Hide all tab contents in the parent container
  const contents = container.querySelectorAll('.tab-content');
  contents.forEach(content => content.style.display = 'none');

  // Remove the active class from all buttons in the parent container
  const buttons = container.querySelectorAll('.tab-button');
  buttons.forEach(button => button.classList.remove('active'));

  // Show the selected tab and activate the corresponding button
  const activeContent = container.querySelector(`#${tabId}`);
  if (activeContent) activeContent.style.display = 'block';

  const activeButton = Array.from(buttons).find(button => button.getAttribute('onclick')?.includes(tabId));
  if (activeButton) activeButton.classList.add('active');
}

// Open LMS tab and its first nested tab by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
  openTab('tab1'); // Main LMS tab
  openTab('tab6', 'tab1'); // Default nested tab within LMS
});
