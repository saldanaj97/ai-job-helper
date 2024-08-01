""" Test the root endpoint """

import os
import sys

from fastapi.testclient import TestClient

sys.path.append(os.path.join(os.path.dirname(__file__), "..", "src"))

from src.main import app

client = TestClient(app)


def test_root():
    """Test the root endpoint."""
    print("Testing root endpoint")
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World"}
