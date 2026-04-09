import sqlite3

conn = sqlite3.connect("movies_download.db")

cur = conn.cursor()

res = cur.execute(
    "SELECT movie_id, title FROM movies ORDER BY movie_id"
)  # 여기서 선택된 데이터들은 아직 내 파이썬 프로그램에(메모리에) 로드된 것이 아니다.

# all_movies = res.fetchall()  # 여기서 fetchall을 해야 실제로 로드가 된 것이다.

print(res.fetchmany(20))

print(res.fetchone(), res.fetchone(), res.fetchone())

for movie in res:
    print(
        movie
    )  # 순환하면서 모든 영화들을 가져오지만, fetchall처럼 한 번에 메모리에 로드하지는 않아서, 부담이 적다.

conn.commit()
conn.close()
