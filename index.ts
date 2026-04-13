import { Database } from "bun:sqlite";
import { movies } from "./drizzle/schema";
import { drizzle } from "drizzle-orm/bun-sqlite";
// import { drizzle } from "drizzle-orm/better-sqlite3";
// when use npm

const sqlite = new Database("movies_download.db");

const db = drizzle(sqlite);

const results = await db
  .select({
    id: movies.movieId,
    title: movies.title,
    overview: movies.overview,
  })
  .from(movies)
  .limit(50);

console.log(results);
