// All records remain readable when JavaScript is unavailable.
document.querySelectorAll('[data-publications]').forEach((browser) => {
  const filters = browser.querySelector('.publication-filters');
  const buttons = [...filters.querySelectorAll('button')];
  const entries = [...browser.querySelectorAll('.publication-entry')];

  function applyFilter(filter) {
    let count = 0;
    entries.forEach((entry) => {
      const visible = filter === 'all' || entry.dataset.selected === 'true';
      entry.closest('li').hidden = !visible;
      if (visible) count += 1;
    });
    browser.querySelectorAll('ol.bibliography').forEach((list) => {
      const empty = [...list.children].every((item) => item.hidden);
      list.hidden = empty;
      const heading = list.previousElementSibling;
      if (heading?.classList.contains('bibliography')) heading.hidden = empty;
    });
    browser.querySelectorAll('[data-publication-group]').forEach((group) => {
      group.hidden = [...group.querySelectorAll('ol.bibliography')].every((list) => list.hidden);
    });
    buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
    browser.querySelector('.publication-count').textContent = filter === 'selected'
      ? `${count} selected papers`
      : `${count} publications and presentations`;
  }

  buttons.forEach((button) => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
  filters.hidden = false;
  applyFilter(new URLSearchParams(window.location.search).get('filter') === 'all' ? 'all' : 'selected');
});
