const express = require("express");
const bodyParser = require("body-parser");

// routes
const vaccine = require("./src/routes/vaccine");
const app = express();
app.use("/vaccines", vaccine);

let port = 8000;
app.listen(port, () => {
  console.log("Servidor em execução no port " + port);
});
