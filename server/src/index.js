const express = require("express");
const fileUpload = require("express-fileupload");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(
  fileUpload({
    debug: false,
  })
);

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3333;

app.listen(port)
