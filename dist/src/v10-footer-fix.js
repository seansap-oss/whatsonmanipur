// WOM Version 10 — isolated navigation reliability patch.
// Ensures mobile Home, Calendar, Saved and Profile always route correctly.

const MOBILE_ROUTE_SELECTOR =
  '.bottom-nav.floating-dock [data-route]';

document.addEventListener(
  'click',
  (event) => {
    const button = event.target.closest(MOBILE_ROUTE_SELECTOR);
    if (!button) return;

    const route = button.dataset.route;
    if (!route) return;

    event.preventDefault();
    event.stopImmediatePropagation();

    window.location.hash = `#${route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  true
);

function applyVersion10Label() {
  document.title = 'What’s On Manipur · WOM v10';

  document.querySelectorAll('.version-label').forEach((node) => {
    node.textContent = 'Website Version 10 · July 2026';
  });
}

applyVersion10Label();

const versionObserver = new MutationObserver(() => {
  applyVersion10Label();
});

versionObserver.observe(document.documentElement, {
  childList: true,
  subtree: true
});
