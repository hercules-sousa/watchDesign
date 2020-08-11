const express = require("express");

const routes = express.Router();

routes.get("/pillow-images", (request, response) => {
  return response.json({
    message: "Alright, everything alright",
  });
});

module.exports = routes;
