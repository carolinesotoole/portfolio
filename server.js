const express = require("express");

const app = express();

app.set('view engine', 'pug');

app.get("/", function(req, res) {
    res.render("index.pug");
});

app.use('/', express.static(__dirname + '/public'));

app.listen(8080);
console.log("listening on port 8080");

