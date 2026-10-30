# CloudSentinel

CloudSentinel is a lightweight *Cloud Security Posture Monitoring* and *Misconfiguration Detection* platform. The current implementation is a simple demo that serves a static HTML dashboard backed by a minimal Flask API.

## Project Structure
```
cloudsentinel/          # Project root
├── index.html           # Entry point
├── src/
│   ├── styles.css      # Basic styling
│   └── app.js          # Client‑side logic
├── backend/
│   └── server.py       # Flask backend
├── requirements.txt     # Python dependencies
└── README.md            # This file
```

## Getting Started
1. **Install dependencies** (Python 3.8+):
   ```bash
   pip install -r requirements.txt
   ```
2. **Run the server**:
   ```bash
   python backend/server.py
   ```
   The API will be available at `http://localhost:5000/api/status`.
3. **Open the dashboard** in a browser: open `index.html` directly or serve it via a static file server.

## Extending the Demo
- Add more API endpoints under `backend/server.py` for health checks, alert handling, etc.
- Replace the dummy `CONFIG` dict with real configuration fetched from your cloud provider APIs.
- Upgrade the front‑end to a SPA framework (React/Vue) if more interactivity is needed.

Feel free to tweak the styling, add authentication, or integrate real monitoring hooks.
