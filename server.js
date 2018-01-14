const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Yay Node Girls"));

app.get("/node", (req, res) => res.send("Its a Node route!"));

app.get("/girls", (req, res) => res.send("Its a Girls route!"));


app.listen(3000, () => console.log(`Server is listening on port 3000. Ready to accept requests!`));