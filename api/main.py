import psycopg2
from fastapi import FastAPI, Depends, HTTPException
from config import config
from router import users, invitations, checklist, dashboard, menu, guestlist
from auth import AuthHandler
from schemas import AuthDetails


def connect():
    connection = None
    try:
        params = config()
        print('connecting to postgresql db')
        connection = psycopg2.connect(**params)
        # create a cursor
        cursor = connection.cursor()
        print('postgresql db version: ')
        cursor.execute('SELECT version()')
        db_version = cursor.fetchone()
        print(db_version)
        cursor.close()
    except(Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if connection is not None:
            connection.close()
            print("db connection terminated")
# isolate the difference functions, use routes -- separation of concerns

auth_handler = AuthHandler()

app = FastAPI()

app.include_router(users.router)
app.include_router(invitations.router)
app.include_router(checklist.router)
app.include_router(menu.router)
app.include_router(dashboard.router)
app.include_router(guestlist.router)

@app.post('/register', status_code=201)
def register(auth_details: AuthDetails):
    if any(x['username'] == auth_details.username for x in users):
        raise HTTPException(status_code=400, detail='username taken')
    hashed_password = auth_handler.get_password_hash(auth_details.password)
    users.append({
        'username': auth_details.username,
        'password': hashed_password
    })
    return {}

@app.post('/login')
def login(auth_details: AuthDetails):
    user = None
    for x in users:
        if x['username'] == auth_details.username:
            user = x
            break

    if(user is None) or (not auth_handler.verify_password(auth_details.password, user['password'])):
        raise HTTPException(status_code=401, detail='Invalid username and/or password')
    token = auth_handler.encode_token(user['username'])
    return {'token': token}

@app.get('/unprotected')
def unprotected():
    return {'hello': 'unprotected'}

@app.get('/protected')
def protected(username=Depends(auth_handler.auth_wrapper)):
    return {'name': username}
