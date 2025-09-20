
document.addEventListener('DOMContentLoaded', () => {
  // Insert current year
  const yearEl = document.getElementById('currentyear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Insert last modified info
  const lastEl = document.getElementById('lastModified');
  if (lastEl) {
    const raw = document.lastModified;
    if (raw) {
      // Try to parse into a Date and format using Africa/Lagos timezone
      const parsed = new Date(raw);
      if (!isNaN(parsed)) {
        const opts = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };
        // Use the Africa/Lagos timezone for consistent display
        const formatted = parsed.toLocaleString('en-GB', { ...opts, timeZone: 'Africa/Lagos' });
        lastEl.textContent = `Last modified: ${formatted}`;
      } else {
        // If parsing fails, fall back to showing the raw string
        lastEl.textContent = `Last modified: ${raw}`;
      }
    } else {
      lastEl.textContent = 'Last modified: not available';
    }
  }
});

