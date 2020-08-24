const express = require("express");
const path = require("path");

const watches = require(path.resolve(__dirname, "database", "data.json"));

const routes = express.Router();

routes.use(
  "/pillow-images/gray/",
  express.static(path.resolve(__dirname, "assets", "pillowWatches", "gray"))
);

routes.use(
  "/pillow-images/black/",
  express.static(path.resolve(__dirname, "assets", "pillowWatches", "black"))
);

routes.use(
  "/pillow-images/blue/",
  express.static(path.resolve(__dirname, "assets", "pillowWatches", "blue"))
);

routes.post("/pillow-images", async (req, res) => {
  try {
    if (!req.files) {
      res.status(500).send({
        message: "No files to upload",
      });
    } else {
      const pillowImage = req.files.pillowImage;

      pillowImage.mv(
        path.resolve(__dirname, "assets", "pillowWatches", pillowImage.name)
      );

      res.send({
        status: 200,
        message: "File uploaded",
        data: {
          name: pillowImage.name,
          mimetype: pillowImage.mimetype,
          size: pillowImage.size,
        },
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Not possible to upload files",
    });
  }
});

routes.get("/watches", (request, response) => {
  return response.send(watches);
});

routes.get("/", (request, response) => {
  return response.json({
    message: "Alright, everything alright",
  });
});

module.exports = routes;
