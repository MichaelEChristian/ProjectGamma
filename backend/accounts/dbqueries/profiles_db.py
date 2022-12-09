from dbqueries.users_db import pool


class ProfileQueries:
    def create_profile(
        self,
        username: str,
        spouse: str,
        budget: int,
        state: str
    ):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO profiles (username, spouse, budget, state)
                    VALUES (%s, %s, %s, %s)
                    RETURNING username, spouse, budget, state
                    """,
                    [
                        username,
                        spouse,
                        budget,
                        state
                    ]
                )

            row = cur.fetchone()
            record = {}
            for i, column in enumerate(cur.description):
                record[column.name] = row[i]
            return record

    def get_profile(self):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    select p.username
                    , p.spouse
                    , p.budget
                    , p.state
                    FROM profiles p
                    INNER JOIN users ON (users.username = p.username)
                    """
                )
                row = cur.fetchone()
                print("rowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww:", row)
                print("row at 0 0 zerooooooooooooooooooooooooooooooooooooo", row[0])
                user_dict = {
                    "username": row[0],
                    "spouse": row[1],
                    "budget": row[2],
                    "state": row[3],
                }
                return user_dict
