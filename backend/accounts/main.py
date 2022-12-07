from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from api.routers import profile, catering, destination

app = FastAPI()

origins = [
    "http://localhost:3000/",
    "http://localhost:8000/",
    os.environ.get("CORS_HOST", None)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(profile.router)
app.include_router(catering.router)
app.include_router(destination.router)
