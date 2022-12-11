from dbqueries.users_db import pool


class ProfileQueries:
    def create_profile(self, username: str, spouse: str, budget: int, state: str):  # noqa: E501
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

                row = cur.fetchone()
                record = {}
                for i, column in enumerate(cur.description):
                    record[column.name] = row[i]
                return record

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

    def update_profile(self, spouse, budget, state, id):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    UPDATE profiles
                    SET spouse = (%s)
                      , budget = (%s)
                      , state = (%s)
                    WHERE id = (%s)
                    """,
                    [spouse, budget, state, id]
                    )
