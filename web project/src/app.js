// Minimal front‑end logic to fetch status from the backend

const statusEl = document.getElementById('status-text');
const configEl = document.getElementById('config-output');

async function fetchStatus() {
  try {
    const res = await fetch('/api/status');
    if (!res.ok) throw new Error('network error');
    const data = await res.json();
    statusEl.textContent = data.status;
    configEl.textContent = JSON.stringify(data.config, null, 2);
  } catch (e) {
    statusEl.textContent = 'Error fetching status';
    console.error(e);
  }
}

fetchStatus();
setInterval(fetchStatus, 30000); // refresh every 30s
