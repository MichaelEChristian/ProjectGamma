from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from api.routers import profile, auth

app = FastAPI()

origins = [
    "http://localhost:3000",
    os.environ.get("CORS_HOST", None)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(profile.router)
