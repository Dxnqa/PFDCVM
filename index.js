import ejs from "ejs";
import express from "express";
import axios from "axios";
import { readdir, readFileSync, writeFileSync, unlink, existsSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import pg from "pg";

const app = express();
const port = 3050;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const client = new pg.Client({
  user: "postgres",
  password: "<entrance0>",
  host: "localhost",
  port: 5432,
  database: "pfdcvm",
});

client.connect();

app.set("views", "./views");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home.ejs", { technician: "Deandrey Domingo" });
});

app.post("/submit", async (req, res) => {
  const submission = {
    category: req.body["category"],
    resolution: req.body["resolution"],
    notes: req.body["notes"],
  };
  //   try {
  //     client.query(
  //       "INSERT INTO call_log(id, name, category, resolution, notes) VALUES ($1, $2, $3, $4, $5)",
  //       []
  //     );
  //   } catch (error) {
  //     console.error(`Error processing: ${error.stack}`);
  //   }
  console.log(`Submission success:`, submission);
  res.redirect("/");
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server active on Port ${port}...`);
});
