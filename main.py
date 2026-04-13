from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")

database = client.get_database("movies")
movies = database.get_collection("movies")

query = {"director": "Christopher Nolan"}

# results = movies.find(query)

# for movie in results:
#     print(movie)

new_movie = {"title": "New movie", "director": "Alpachino"}

result = movies.insert_one(new_movie)

print(result)

client.close()
