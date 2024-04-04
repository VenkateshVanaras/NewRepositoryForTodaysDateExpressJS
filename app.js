const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let today = `${day}-${month + 1}-${year}`;
  let tt = today.toString();

  response.send(tt);
});
app.listen(3000);
module.exports = app;
