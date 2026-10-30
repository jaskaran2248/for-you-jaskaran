"""
Minimal Flask backend for CloudSentinel demo.
"""
from flask import Flask, jsonify
import os

app = Flask(__name__)

# Dummy config data; in a real project this would be read from a DB or file.
CONFIG = {
    "cloudProvider": "aws",
    "regions": ["us-east-1", "eu-central-1"],
    "policies": {
        "requiredTags": ["environment", "owner"],
        "openPorts": ["22", "443"],
    },
}

@app.route("/api/status")
def status():
    """Return a basic status snapshot."""
    return jsonify(
        status="OK",  # In production this would be a health check
        config=CONFIG,
    )

if __name__ == "__main__":
    # Run on port 5000 by default; expose via env var if needed
    port = int(os.getenv("PORT", "5000"))
    app.run(host="0.0.0.0", port=port)
