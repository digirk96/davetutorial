const express = require("express");
const app = express();
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");

const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));