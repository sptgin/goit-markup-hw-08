(() => {
  const menuButton = document.querySelector('[data-menu-button]');
  const menuData = document.querySelector('[data-menu]');
  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('is-open');
    menuData.classList.toggle('is-open');
  });
})();
