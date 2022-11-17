-- Let's create some tables! :)
CREATE_TABLE IF NOT EXISTS account (
    account_id INT NOT NULL,
    username varchar(12) NOT NULL,
    user_password varchar(12) NOT NULL,
    email varchar(30) NOT NULL,
    budget int NOT NULL,
    PRIMARY KEY (account_id)
);
