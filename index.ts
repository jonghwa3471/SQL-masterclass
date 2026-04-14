import { createClient } from "redis";

const client = createClient();

await client.connect();

await client.flushAll();

await client.hSet("users:1", {
  username: "nico",
  password: "1234",
});

const r = await client.hGetAll("users:1");
console.log(r);

await client.close();
