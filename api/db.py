import os
from psycopg_pool import ConnectionPool


pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])


class UserQueries:
    def get_all_users(self):
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    SELECT acc.email, acc.username, acc.user_password
                    FROM account AS acc
                    ORDER BY acc.id
                    """
                )
                results = []
                for row in cur.fetchall():
                    account = {}
                    for i, column in enumerate(cur.description):
                        account[column.name] = row[i]
                        results.append(account)
                    return results
