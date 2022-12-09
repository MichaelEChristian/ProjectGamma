\connect accounts

CREATE TABLE IF NOT EXISTS invitations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    spouse VARCHAR(50) NOT NULL,
    description VARCHAR(300) NULL,
    date VARCHAR(300) NOT NULL,
    time VARCHAR(100) NOT NULL,
    location VARCHAR(200) NOT NULL,
    extra VARCHAR(100) NULL
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL UNIQUE,
    firstname VARCHAR(200),
    lastname VARCHAR(200),
    invitation_id INTEGER,
    CONSTRAINT fk_invitation
        FOREIGN KEY(invitation_id)
            REFERENCES invitations(id)
);

CREATE TABLE IF NOT EXISTS profiles (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    spouse VARCHAR(200),
    budget INTEGER,
    state VARCHAR(50)
);
