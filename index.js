import ejs from "ejs";
import express from "express";
import axios from "axios";
import { readdir, readFileSync, writeFileSync, unlink, existsSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const port = 3050;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set("views", "./views");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home.ejs", { technician: "Deandrey Domingo" });
});

app.post("/submit", (req, res) => {
  const submission = req.body;
  res.redirect("/");
  console.log("Submission success");
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server active on Port ${port}...`);
});
