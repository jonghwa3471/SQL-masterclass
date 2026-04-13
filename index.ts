import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { comments, users } from "./schema";
import { eq } from "drizzle-orm";
// import { drizzle } from "drizzle-orm/better-sqlite3";
// when use npm

const sqlite = new Database("users.db");

const db = drizzle(sqlite, { logger: true });

/* const result = await db
  .insert(users)
  .values({
    username: "nico",
  })
  .returning(); */

/* const result = await db
  .insert(comments)
  .values({ payload: "hello drizzle", userId: 1 })
  .returning(); */

// const result = await db.select().from(comments).where(eq(comments.userId, 1));

const result = await db
  .select({
    user: users.username,
    comment: comments.payload,
  })
  .from(comments)
  .leftJoin(users, eq(comments.userId, users.userId));

console.log(result);
