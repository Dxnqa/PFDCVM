import pg from "pg";

const client = new pg.Client({
    user: "postgres",
    password: "<entrance0>",
    host: "localhost",
    port: 5432,
    database: "pfdcvm"
})

client.connect()

export async function callRecord(record = "*") {
    if (record !== "*") {
        const database = await client.query('SELECT id FROM call_log WHERE category LIKE $1', [record])
        return console.log(database.rowCount)
    } else {
        const database = await client.query('SELECT id FROM call_log')
        return console.log(database.rowCount)
    }
}