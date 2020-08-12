const express = require("express");

const routes = express.Router();

routes.use(
  "/pillow-images",
  express.static(__dirname + "/assets/pillowWatches")
);

routes.get("/", (request, response) => {
  return response.json({
    message: "Alright, everything alright",
  });
});

module.exports = routes;
