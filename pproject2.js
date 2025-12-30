const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
  document.querySelectorAll('.toggle').forEach(checkbox => {
    checkbox.checked = false;
  });
});
