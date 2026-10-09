// ARIA labels and keyboard navigation
document.querySelectorAll('button').forEach(btn => {
  if (!btn.getAttribute('aria-label')) {
    btn.setAttribute('aria-label', btn.textContent);
  }
});

// Keyboard shortcut support
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 's') {
    handleSave();
  }
});