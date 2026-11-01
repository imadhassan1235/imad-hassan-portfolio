"""Run the API locally or bind it for a production hosting platform."""

import os
import sys
from pathlib import Path

import uvicorn

DEV = "--dev" in sys.argv[1:]
PORT = int(os.environ.get("BACKEND_PORT" if DEV else "PORT", os.environ.get("BACKEND_PORT", "8000")))

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        app_dir=str(Path(__file__).resolve().parent),
        host="127.0.0.1" if DEV else "0.0.0.0",
        port=PORT,
        reload=DEV,
    )
