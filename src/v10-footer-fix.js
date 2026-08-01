// WOM Version 11 — responsiveness repair.
// Removes the global capture-phase navigation override and prevents a
// self-triggering MutationObserver loop from consuming the main thread.

const VERSION_TEXT = 'Website Version 11 · August 2026';
const PAGE_TITLE = 'What’s On Manipur · WOM v11';

function applyVersionLabelSafely() {
  if (document.title !== PAGE_TITLE) {
    document.title = PAGE_TITLE;
  }

  document.querySelectorAll('.version-label').forEach((node) => {
    if (node.textContent !== VERSION_TEXT) {
      node.textContent = VERSION_TEXT;
    }
  });
}

// Initial render.
applyVersionLabelSafely();

// The app replaces large sections of DOM when changing routes. Observe those
// renders, but only mutate when the label is actually different. This avoids
// the Version 10 infinite observer feedback loop.
let scheduled = false;
const versionObserver = new MutationObserver(() => {
  if (scheduled) return;
  scheduled = true;

  requestAnimationFrame(() => {
    scheduled = false;
    applyVersionLabelSafely();
  });
});

versionObserver.observe(document.getElementById('app') || document.body, {
  childList: true,
  subtree: true
});

// Recheck after route changes without intercepting or blocking the app's
// existing click handlers.
window.addEventListener('hashchange', () => {
  requestAnimationFrame(applyVersionLabelSafely);
});
