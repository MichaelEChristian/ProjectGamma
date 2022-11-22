CREATE TABLE IF NOT EXISTS account (
    account_id SERIAL NOT NULL UNIQUE,
    username varchar(12) NOT NULL,
    user_password varchar(12) NOT NULL,
    email varchar(30) NOT NULL,
    budget int NOT NULL
);

CREATE TABLE IF NOT EXISTS accounts (
    id SERIAL NOT NULL PRIMARY KEY,
    hashed_password VARCHAR(25) NOT NULL,
    email VARCHAR(30) NOT NULL UNIQUE,
    full_name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS dashboard (
    id SERIAL NOT NULL PRIMARY KEY,
    account INT NOT NULL REFERENCES accounts(id),
    venue VARCHAR(50),
    number_of_guests INT NOT NULL REFERENCES guestlist(id)
);

CREATE TABLE IF NOT EXISTS invitations (
    id SERIAL NOT NULL PRIMARY KEY,
    account INT NOT NULL REFERENCES accounts(id),
    name VARCHAR(50) NOT NULL REFERENCES accounts(full_name),
    spouse VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    date VARCHAR(50) NOT NULL,
    time VARCHAR(50) NOT NULL,
    location VARCHAR(100) NOT NULL,
    additional_information TEXT
);

CREATE TABLE IF NOT EXISTS checklist (
    id SERIAL NOT NULL PRIMARY KEY,
    account INT NOT NULL REFERENCES accounts(id),
    theme BOOLEAN NOT NULL,
    guest_list BOOLEAN NOT NULL,
    venue BOOLEAN NOT NULL,
    destination BOOLEAN NOT NULL,
    catering BOOLEAN NOT NULL
);
CREATE TABLE IF NOT EXISTS guestlist (
    id SERIAL NOT NULL PRIMARY KEY,
    account INT NOT NULL REFERENCES accounts(id),
    name_of_guest VARCHAR(50) NOT NULL
);
CREATE TABLE IF NOT EXISTS menu (
    id SERIAL NOT NULL PRIMARY KEY
);

INSERT INTO accounts VALUES(
    1, 'testing', 'bossmode@gmail.com', 'jenny'
);
