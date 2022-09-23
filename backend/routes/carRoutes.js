const express = require("express");
const router = express.Router();

const {
  getCars,
  setCar,
  updateCar,
  deleteCar,
} = require("../controller/carController");

// const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getCars).post(setCar);

router.route("/:id").put(updateCar).delete(deleteCar);

module.exports = router;
