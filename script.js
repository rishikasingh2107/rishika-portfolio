const toggleBtn = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

function setMenu(open){
  toggleBtn.setAttribute('aria-expanded', String(open));
  mobileMenu.hidden = !open;
}

toggleBtn?.addEventListener('click', () => {
  const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
  setMenu(!isOpen);
});

mobileMenu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => setMenu(false));
});

document.getElementById('year').textContent = new Date().getFullYear();
