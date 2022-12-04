from user_db import pool


class ProfileQueries:
    def get_profile(self, id):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    select p.username
                    , users.id
                    , users.firstname
                    , users.lastname
                    , users.username
                    from user_profile p
                    INNER JOIN users ON (users.id = p.username)
                    WHERE users.id = %s;
                    """,
                    [id],
                )
                row = cur.fetchone()
                table = {
                    "id": row[0],
                    "userid": row[1],
                    "firstname": row[2],
                    "lastname": row[3],
                    "username": row[4],
                }
                return table
