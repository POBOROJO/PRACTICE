//  write a function to create a users table in a database

import { Client } from "pg";

const client = new Client({
    connectionString: process.env.DATABASE_URL,
})

client.connect()
