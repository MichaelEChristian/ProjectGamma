from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_api_destinations():
    response = client.get('/destination/')
    assert response.status_code == 200
    return {"Message": "Working route"}
