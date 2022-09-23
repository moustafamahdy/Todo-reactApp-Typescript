const asyncHandler = require("express-async-handler");
const Car = require("../models/Car");

// @desc Get goals
// @route GET /api/goals
// @access Private
exports.getCars = asyncHandler(async (req, res, next) => {
  const cars = await Car.find({});

  res.status(200).json(cars);
});

// @desc Set goal
// @route POST /api/goals
// @access Private
exports.setCar = asyncHandler(async (req, res, next) => {
  if (!req.body.brand) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const car = await Car.create({
    brand: req.body.brand,
    type: req.body.type,
    color: req.body.color,
    quantity: req.body.quantity,
  });

  res.status(200).json(car);
});

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
exports.updateCar = asyncHandler(async (req, res, next) => {
  const car = await Car.findById(req.params.id);

  if (!car) {
    res.status(400);
    throw new Error("Car not found");
  }

  //   // Check for user
  //   if (!req.user) {
  //     res.status(401);
  //     throw new Error("User not found");
  //   }

  //   // Make sure the logged in user matches the goal user
  //   if (goal.user.toString() !== req.user.id) {
  //     res.status(401);
  //     throw new Error("User not authorized");
  //   }

  const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedCar);
});

// @desc Delete goals
// @route DELETE /api/goal/:id
// @access Private
exports.deleteCar = asyncHandler(async (req, res, next) => {
  const car = await Car.findById(req.params.id);

  if (!car) {
    res.status(400);
    throw new Error("Car not found");
  }

  //   // Check for user
  //   if (!req.user) {
  //     res.status(401);
  //     throw new Error("User not found");
  //   }

  //   // Make sure the logged in user matches the goal user
  //   if (goal.user.toString() !== req.user.id) {
  //     res.status(401);
  //     throw new Error("User not authorized");
  //   }

  const deletedCar = await Car.findByIdAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id });
});
