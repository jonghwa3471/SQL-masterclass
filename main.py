import sqlite3

connection = sqlite3.connect("users.db")

cursor = connection.cursor()


def init_table():
    cursor.execute(
        """
    CREATE TABLE users (
        user_id integer primary key autoincrement,
        username text not null,
        password text not null
    );
    """
    )
    cursor.execute(
        """
        insert into users (username, password) 
        values ('nico', 123), ('lynn', 321);
    """
    )


def print_all_users():
    result = cursor.execute("select * from users;")
    data = result.fetchall()
    print(data)


def i_change_password(username, new_password):
    cursor.execute(
        f"UPDATE users SET password = '{new_password}' WHERE username = '{username}'"
    )


def s_change_password(username, new_password):
    cursor.execute(
        "UPDATE users SET password = ? WHERE username = ?", (new_password, username)
    )


s_change_password("nico", "hached again' --")
print_all_users()
connection.commit()
connection.close()
