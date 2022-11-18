from fastapi import FastAPI
import uvicorn
from model import PostSchema

posts = [
    {
        "id": 1,
        "title": "Hello",
        "content": "World"
    },
    {
        "id": 2,
        "title": "No",
        "content": "Thanks",
    },
    {
        "id": 3,
        "title": "Happy",
        "content": "Friday"
    },
]

app = FastAPI()


#1 for testing
@app.get("/", tags=["test"])
def greet():
    return {"Hello":"World"}

#2 get posts
@app.get("/posts", tags=["posts"])
def get_all_posts():
    return {"data": posts}

#3 get post by id
