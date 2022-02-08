const express = require("express");
const app = express();
const port = 8080;

app.get("/", async (req, res) => {
  res.setHeader("Content-type", "text/html");
  res.status(200);
  res.send("<h1>Accepted request!<br>Server is running...</h1>");
});

app.listen(port, () => {
  console.log(`Actually listen at the ${port} port`);
});