from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_api_destinations():
    response = client.get('/destination/?selctedStates=NY')
    assert response.status_code == 200


def test_api_catering():
    response = client.get('/menu/all/?selectedCuisines=French')
    assert response.status_code == 200
