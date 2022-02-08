const express = require("express");
const app = express();
const port = 8080;

app.get("/", async (req, res) => {
  res.setHeader("Content-type", "text/html");
  res.status(200);
  res.send("<h1>Accepted request:</h1> <p>Server is running...</p>");
});

app.listen(port, () => {
  console.log(`Actually listen at the ${port} port`);
});

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("healthy");
  }, 300);
  reject("sick")
});

myPromise.then(() => {
  console.log("this application cannot run");
});