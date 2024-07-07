
const bodyParser = require("body-parser")
const cors = require("cors")
const pg = require("pg")
const env = require("dotenv")
const express = require('express')

const app = express();
const port= 5000;
env.config();

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
    ssl:true
  });
db.connect();


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.post("/message", async (req, res) => {
    const message = req.body
    console.log(message)
    await db.query("INSERT INTO messages (message) VALUES ($1)",
    [message])
}
)

app.listen(port, () => {
    console.log("Server is running on port "+ port);
})



