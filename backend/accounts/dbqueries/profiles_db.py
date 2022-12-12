from dbqueries.users_db import pool
from dbqueries.helpers import create_record


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
                    [username, spouse, budget, state],
                )
                return create_record(cur, cur.fetchone())

    def get_profile(self, username):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT p.id
                        , p.username
                        , p.spouse
                        , p.budget
                        , p.state
                    FROM profiles p
                    WHERE p.username = (%s)
                    """,
                    [username]
                )
                row = cur.fetchone()
                user_dict = {
                    "id": row[0],
                    "username": row[1],
                    "spouse": row[2],
                    "budget": row[3],
                    "state": row[4],
                }
                return user_dict

    def update_profile(self, spouse, budget, state, id, username):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    UPDATE profiles
                    SET spouse = (%s)
                      , budget = (%s)
                      , state = (%s)
                    WHERE id = (%s)
                    AND username = (%s)
                    """,
                    [spouse, budget, state, id, username]
                )
