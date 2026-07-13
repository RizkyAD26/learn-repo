// ponytail: minimal interactions — theme toggle + filter tabs wired to data-status. No framework.

// Theme
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if (saved === 'light') root.setAttribute('data-bs-theme', 'light');

document.getElementById('themeBtn')?.addEventListener('click', () => {
  const next = root.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-bs-theme', next);
  localStorage.setItem('theme', next);
});

// Filter tabs — ponytail: show/hide by data-status; replace with real API filter when backend ready.
document.querySelectorAll('.filter__tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter__tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const f = tab.dataset.filter;
    document.querySelectorAll('.anime-card').forEach(card => {
      card.classList.toggle('is-hidden', f !== 'all' && card.dataset.status !== f);
    });
  });
});
