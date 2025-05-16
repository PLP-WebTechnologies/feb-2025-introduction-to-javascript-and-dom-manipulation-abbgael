// Change text and style
document.getElementById('change-text-btn').addEventListener('click', function () {
  const infoText = document.getElementById('info-text');
  infoText.textContent = 'The text and style have been changed!';
  infoText.style.color = 'blue';
  infoText.style.fontWeight = 'bold';
  infoText.style.backgroundColor = '#f0f0f0';
});

// Add an element
document.getElementById('add-element-btn').addEventListener('click', function () {
  const container = document.getElementById('dynamic-container');
  const newElement = document.createElement('p');
  newElement.textContent = 'A new paragraph has been added!';
  newElement.className = 'added-paragraph';
  container.appendChild(newElement);
});

// Remove an element
document.getElementById('remove-element-btn').addEventListener('click', function () {
  const container = document.getElementById('dynamic-container');
  if (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
});
