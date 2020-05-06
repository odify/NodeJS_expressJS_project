// Required ext modules

const express = require("express");
const path = require("path");

//App variables

const app = express();
const port = process.env.PORT || "8000";

//App config

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));


//Routes definitions

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

// Server activision

app.listen(port, () => {

    console.log(`Listening to requests on http://localhost:${port}`);
});