import * as mongoose from "mongoose";

await mongoose.connect("mongodb://localhost:27017/movies");

const moviesSchema = new mongoose.Schema({
  director: { type: String, required: true },
  title: { type: String, required: true },
  rating: {
    type: Number,
    required: true,
    min: [1, "No movie deserves less than 1"],
    max: [10, "No movie is better than 10"],
  },
});

const Movie = mongoose.model("Movie", moviesSchema, "practices");

const movie = await Movie.create({
  director: "me",
  title: "The mongoose",
  rating: 7,
});

console.log(movie);

const movies = await Movie.find({
  rating: { $gte: 8.2 },
});

console.log(movies);

await mongoose.disconnect();
