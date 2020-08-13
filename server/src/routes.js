const express = require("express");
const path = require("path");

const watches = require(path.resolve(__dirname, "database", "data.json"))

const routes = express.Router();

routes.use(
  "/pillow-images",
  express.static(path.resolve(__dirname, "assets", "pillowWatches"))
);

routes.get("/watches", (request, response) => {
  return response.send(watches)
})

routes.get("/", (request, response) => {
  return response.json({
    message: "Alright, everything alright",
  });
});

module.exports = routes;
