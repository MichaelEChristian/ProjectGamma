from fastapi import FastAPI

data = {
    1: {
        "hello": "world"
    }
}

app = FastAPI()

@app.get("/hello-world/")
def get_hello_world():
    return data
