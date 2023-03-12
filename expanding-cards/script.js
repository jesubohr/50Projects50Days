const panels = document.querySelectorAll('.panel');

let activePanel = document.querySelector('.panel.active');
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    if (activePanel) activePanel.classList.remove('active');
    panel.classList.add('active');
    activePanel = panel;
  })
})
