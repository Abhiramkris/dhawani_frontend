function openTab(tabId) {
  // Remove 'active' class from all tab contents
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  // Remove 'active' class from all tab buttons
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => {
    button.classList.remove('active');
    button.style.backgroundColor = ''; // Reset background color
  });

  // Add 'active' class to the selected tab content
  document.getElementById(tabId).classList.add('active');

  // Find and add 'active' class to the corresponding tab button
  const activeButton = Array.from(buttons).find(button => button.dataset.tab === tabId);
  if (activeButton) {
    activeButton.classList.add('active');
    activeButton.style.backgroundColor = 'rgba(245, 134, 52, 1)';
    activeButton.style.color = 'white'; // Set background color for the active button
  }
}

// Initialize the first tab on page load
document.addEventListener('DOMContentLoaded', () => openTab('tab1'));
