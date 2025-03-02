const express = require("express");

const { InfoController } = require("../../controllers");

const airplaneRoutes = require("./airplane-routes");

const router = express.Router();

router.use("/airplanes", airplaneRoutes);

// InfoController is an object or class that contains multiple methods. You need to call the specific method (info) to handle the request.
router.get("/info", InfoController.info);

module.exports = router;
