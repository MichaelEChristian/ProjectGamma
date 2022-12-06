from library.auth import LogInCredentials, UserSignUp, authenticate_user, create_access_token, hash_password
from db.user_db import DuplicateAccount, AccountsQueries
from fastapi import (Depends, HTTPException, status, Response, APIRouter)

router = APIRouter()

@router.post("/api/auth/signin")
async def get_access_token(
    login_credentials: LogInCredentials,
    repo: AccountsQueries = Depends(),
):
    (success, user) = authenticate_user(repo, login_credentials.username, login_credentials.password)
    if not success:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(
        data={
            "sub": user["password"],
            "userid": user["id"],
            "username": user["username"],
            "firstname": user["firstname"],
            "lastname": user["lastname"],
        },
    )
    return {"Authorization": f"Bearer {access_token}"}

@router.post("/api/auth/signup")
async def signup(
    user: UserSignUp, response: Response, repo: AccountsQueries = Depends()
):
    try:
        repo.create_user(
            user.username,
            hash_password(user.password),
            user.email,
            user.firstname,
            user.lastname,
        )
        return user
    except DuplicateAccount:
        response.status_code = status.HTTP_409_CONFLICT
        return { "detail": "this account already exists"}
